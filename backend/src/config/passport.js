const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user');
const config=require('./config')
const Sample=require('../models/initial_db')



async function findOrCreateUser(profile, accessToken, refreshToken, idToken) {
  try {
    let user = await User.findOne({ googleId: profile.id });

    if (user) {
      user.accessToken = accessToken || user.accessToken;
      user.refreshToken = refreshToken || user.refreshToken;
      user.idToken = idToken || user.idToken;

      await user.save();
      return user;  
    } else {
      const googleEmail = profile.emails[0].value;
      const sampleUser = await Sample.findOne({ email: googleEmail });

      if (!sampleUser) {
        throw new Error('Unauthorized: Email not found in the Sample database.');
      }

      const newUser = new User({
        googleId: profile.id,
        name: profile.displayName,
        email: googleEmail,
        picture: profile.photos[0].value,
        accessToken,
        refreshToken,
        idToken
      });

      user = await newUser.save();
      return user;
    }
  } catch (err) {
    throw err;
  }
}

passport.use(new GoogleStrategy({
  clientID: config.GOOGLE_CLIENT_ID,
  clientSecret: config.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback",
  passReqToCallback: true,
  scope: ['profile', 'email', 'openid'],
  accessType: 'offline',
  prompt: 'consent',
},
async function(req, accessToken, refreshToken, params, profile, done) {
  try {
    const idToken = params.id_token;
    const googleEmail = profile.emails[0].value;


    if (!accessToken || !refreshToken || !idToken) {
      return done(new Error('Authentication failed: Missing tokens'));
    }

    if (!googleEmail.endsWith('@thebluespire.com')) {
      return done(null, false, { message: 'Unauthorized: You must use a @thebluespire.com email to log in.' });
    }

    const sampleUser = await Sample.findOne({ email: googleEmail });
    if (!sampleUser) {
      return done(null, false, { message: 'Unauthorized: Email not found in the Sample database.' });
    }

    const user = await findOrCreateUser(profile, accessToken, refreshToken, idToken);

    if (!user) {
      return done(null, false, { message: 'User not found or not authorized.' });
    } 

    return done(null, { profile, accessToken, refreshToken, idToken });

  } catch (err) {
    return done(err);
  }
}));

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });


module.exports=passport