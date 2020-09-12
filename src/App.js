import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const API_URL = 'https://ghibliapi.herokuapp.com/films';

  const fetchAPI = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      //setArray(data.data);
      console.log(data);
    })
    .catch( error => console.error(error));
  };

    fetchAPI(API_URL)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}/>
      </header>
    </div>
  );
}

export default App;
