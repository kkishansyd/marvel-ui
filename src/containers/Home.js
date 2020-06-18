import React from 'react';
import styled from 'styled-components';
import './css/Home.css';
import Header from '../components/Header';

const Banner = styled.div`
  position: absolute;
`;

export default function Home() {
  function renderLander() {
    return (
      <div className="lander">
        <Banner />
        <Header />
      </div>
    );
  }

  return <div className="Home">{renderLander()}</div>;
}
