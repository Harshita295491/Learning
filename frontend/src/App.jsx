import { useState,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './components/Header'
import MainPage from './components/MainPage';
import PrivateRoute from './components/PrivateRoute';
import axios from 'axios';
// import Header1 from './components/Header1';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAuthStatus = async () => {
    try {
      const response = await axios.get("http://localhost:3000/login/success", {
        withCredentials: true,
      });
      if(response.data.success){
        setIsAuthenticated(true); 
      }
    } catch (error) {
      console.error("Error checking authentication status:", error);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // You can show a loading spinner here
  }

  return (
    
    <Router>
      <Header/>
  

    <Routes>
      {/* Define your routes here */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route
          path="/dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <MainPage />
            </PrivateRoute>
          }
        />
      {/* <Route path="/dashboard" element={<MainPage/>}/> */}
      {/* <Route path="/register" element={<Register />} /> */}
      
    
    </Routes>
  </Router>

  )
}

export default App
