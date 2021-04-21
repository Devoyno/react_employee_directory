import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import "./style.css";

function Header() { 
  return (
    <Jumbotron fluid>
  <Container>
    <h1>Employee Database</h1>
    <p>
      Use searchbox to find a specific employee
    </p>
  </Container>
</Jumbotron>
  )
}

export default Header