import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const API_URL = 'https://ghibliapi.herokuapp.com/films';
  const [dataFilms, setData] = useState([]);

  useEffect(() => {
    fetchAPI(API_URL);
  }, []);


  const fetchAPI = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setData(data)
      //console.log(data);
    })
    .catch( error => console.error(error));
  };

  return (
    <div className="App">
      <header>
        <Image src={logo} fluid/>
      </header>
      <section>
        {
          dataFilms.length > 0 && dataFilms.map(item => 
            <p key={item.id}>{item.title} </p>
          )
        }
      </section>
    </div>
  );
}

export default App;
