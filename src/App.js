import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import UserLoginPage from './User Login Page/userLoginPage';
import HomePage from './Home Page/HomePage';
import Login from './Login Page/loginPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/auth" element={<UserLoginPage />} />
        <Route path='/homePage' element={<HomePage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
