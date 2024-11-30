
const axios = require('axios');
const Sample = require('../models/initial_db');
const config = require('../config/config');
const jwt = require('jsonwebtoken');
const model=require('../models/user')

async function handleGoogleCallback(req, res) {
    try {
      // Check if the authentication was successful
      const accessToken = req.user.accessToken;
      const idToken = req.user.idToken;
      const refreshToken = req.user.refreshToken;

    console.log('Access Token:', accessToken);
    console.log('ID Token:', idToken);
    console.log('Refresh Token:', refreshToken);

      if (!accessToken || !idToken || !refreshToken) {
        return res.status(401).send('Authentication failed. Missing tokens.');
      }

      const userDetails = decodeTokens(accessToken, idToken);
      const googleEmail = userDetails.userDetailsFromIdToken.email;

      if (!googleEmail.endsWith('@thebluespire.com')) {
        return res.redirect('/login');
        // return res.status(401).send('Unauthorized: You must use a @thebluespire.com email to log in.');
      }

      const googleId = req.user.profile.id;
      
      const user = await Sample.findOne({ email: googleEmail });

      if (!user) {
       return res.redirect('/login');
        // return res.status(400).send('User not found in the database');
     
      }

      req.session.googleId = googleId;
      req.session.accessToken = accessToken;
      req.session.refreshToken = refreshToken;
      req.session.idToken = idToken;

      req.session.save((err) => {
        if (err) {
          console.error('Session save error:', err);
        }
        res.redirect('/profile');
      });

    } catch (err) {
      console.error('Error during Google login callback:', err);
      res.status(500).send('Internal server error');
    }
  }





async function getProfile(req, res) {
  if (!req.session.accessToken) {
    return res.redirect('/login');
  }

  res.send(`
    <h1>Profile</h1>
    <p>Name: ${req.user.profile.displayName}</p>
    <p>Email: ${req.user.profile.emails[0].value}</p>
    <p><a href="/refresh">Refresh Access Token</a></p>
    <p><a href="/logout">Logout</a></p>
  `);
}





async function refreshAccessToken(req, res) {
  if (!req.session.refreshToken) {
    return res.redirect('/login');
  }

  try {
    const googleId = req.session.googleId;
    const user = await model.findOne({ googleId });

    if (!user) {
      return res.status(400).send('User not found.');
    }

    const { access_token, refresh_token, id_token } = await refreshTokens(user);

    req.session.accessToken = access_token;
    if (refresh_token) req.session.refreshToken = refresh_token;
    if (id_token) req.session.idToken = id_token;

    res.send('<p>Access token refreshed successfully.</p><p><a href="/profile">Go back to Profile</a></p>');
    console.log(`New Access Token:${access_token}`);
  } catch (error) {
    console.error('Error refreshing tokens:', error);
    res.status(500).send('Failed to refresh tokens.');
  }
}





async function logout(req, res) {
  req.logout((err) => {
    if (err) return res.status(500).send('Logout error');
    
    req.session.destroy((err) => {
      if (err) return res.status(500).send('Error in session destruction');
      
      res.clearCookie('accessToken');
      res.clearCookie('refreshToken');
      
      res.clearCookie('connect.sid', { path: '/' });
      res.redirect('/');
    });
  });
}




function decodeTokens(accessToken, idToken) {
    try {
      // Decode Access Token without verifying (use only if you trust the token)
      // const decodedAccessToken = jwt.decode(accessToken);
      // console.log("Decoded Access Token:", decodedAccessToken);
  
      // Decode ID Token without verifying (use only if you trust the token)
      const decodedIdToken = jwt.decode(idToken);
      console.log("Decoded ID Token:", decodedIdToken);
  
      // Extracting user details (varies depending on what the token contains)
      // const userDetailsFromAccessToken = {
      //   // userId: decodedAccessToken.sub,
      //   email: decodedAccessToken.email,
      //   name: decodedAccessToken.name,
      //   scopes: decodedAccessToken.scope || decodedAccessToken.scopes,
      // };
  
      const userDetailsFromIdToken = {
        userId: decodedIdToken.sub,
        email: decodedIdToken.email,
        name: decodedIdToken.name,
      };
  
      // console.log("User Details from Access Token:", userDetailsFromAccessToken);
      console.log("User Details from ID Token:", userDetailsFromIdToken);
  
      return { /* userDetailsFromAccessToken */userDetailsFromIdToken };
  
    } catch (error) {
      console.error("Error decoding tokens:", error);
      throw error;
    }
  }










async function refreshTokens(user) {
  const url = 'https://oauth2.googleapis.com/token';
  const data = {
    client_id: config.GOOGLE_CLIENT_ID,
    client_secret: config.GOOGLE_CLIENT_SECRET,
    refresh_token: user.refreshToken,
    grant_type: 'refresh_token',
  };

  try {
    const response = await axios.post(url, data);
    const { access_token, refresh_token, id_token } = response.data;

    user.accessToken = access_token;
    if (refresh_token){ user.refreshToken = refresh_token;
        console.log('New Refresh Token:', refresh_token); 
    }
    if (id_token) {user.idToken = id_token;
        console.log('New ID Token:', id_token);
    }   
     await user.save();
     console.log('Tokens updated and saved successfully');
    return { access_token, refresh_token, id_token };
  } catch (error) {
    console.error('Error refreshing tokens:', error);
    throw error;
  }
}







module.exports = {
  handleGoogleCallback,
  getProfile,
  refreshAccessToken,
  logout,
};
