import React from 'react';
import styled from 'styled-components';
import './App.css';
import Routes from './Routes';
import Header from './components/Header';
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import hero from './images/hero.jpg';

const Banner = styled.div`
  position: absolute;
  z-index: -1;
`;

function App() {
  return (
    <div className="app">
      <Banner>
        <img src={hero} width="100%" height="100%" alt="hero" />
      </Banner>
      <Header />
      <Routes />
    </div>
  );
}

export default App;
