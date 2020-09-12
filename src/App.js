import React from 'react';
import { Image } from 'react-bootstrap';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <header>
        <Image src={logo} fluid/>
      </header>
    </div>
  );
}

export default App;
