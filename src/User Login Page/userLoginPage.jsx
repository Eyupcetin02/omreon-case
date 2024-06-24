import React, { useState } from 'react';
import "./userLoginPage.css"
const UserLoginPage = () => {

    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    window.location = "/homePage"
  };
    return (
        <div className='login-parent-container'>
        <div className="login-container">
      <h2>Netflix'e Giriş Yapin</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Kullanici Adi"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          
        />
        <button type="submit">Giriş Yap</button>
      </form>
      <p>Hesabiniz yok mu? <a href="#">Şimdi kayit olun.</a></p>
    </div>
    </div>
    );
}

export default UserLoginPage;
