// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import BtcPrices from './Components/BtcPrices';
import Image from './Components/Image';
import './App.css';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [btcPrices, setBtcPrices] = useState({});
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch BTC prices on page load
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => setBtcPrices(response.data.bpi))
      .catch(error => console.error('Error fetching BTC prices:', error.response));

    // Fetch random images
    axios.get('https://picsum.photos/v2/list?page=1&limit=10')
      .then(response => setImages(response.data))
      .catch(error => console.error('Error fetching images:', error.response));
  }, []);

  const handleLogin = () => {
    // Call the randomuser.me API on login button click
    axios.get('https://randomuser.me/api/')
      .then(response => {
        const user = response.data.results[0];
        setUsername(`${user.name.first} ${user.name.last}`);
        setLoggedIn(true);
      })
      .catch(error => console.error('Error logging in:', error.response));
  };

  return (
    <div className={`app ${showSidebar ? 'with-sidebar' : 'without-sidebar'}`}>
      <Header
        showSidebar={showSidebar}
        toggleSidebar={() => setShowSidebar(!showSidebar)}
        isLoggedIn={isLoggedIn}
        username={username}
        handleLogin={handleLogin}
      />
      <main>
        <BtcPrices btcPrices={btcPrices} />
        <Image images={images} />
      </main>
    </div>
  );
};

export default App;
