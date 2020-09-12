import React, { useState, useEffect } from 'react';
import {Container, Image, Table } from 'react-bootstrap';
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
      <h3 className="mb-2">Did you know all of this information about the Studio Ghibli's films?</h3>
      <Container fluid>
        <Table striped size="sm" responsive >
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Director</th>
              <th>Release date</th>
            </tr>
          </thead>
          <tbody>
          {
            dataFilms.length > 0 && dataFilms.map(item =>
              <tr key={item.id}>
                <td> {item.title} </td>
                <td> {item.description} </td>
                <td> {item.director} </td>
                <td> {item.release_date } </td>
              </tr>
            )
          }
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
