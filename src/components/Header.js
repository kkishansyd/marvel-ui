import React from 'react';
import styled from 'styled-components';
import './css/Header.css';

const HeaderWrapper = styled.div`
  position: absolute;
`;

const HomeLink = styled.a`
  display: block;
`;

const Navigation = styled.nav`
  display: flex;
`;

const MyAccountButton = styled.div`
  display: flex;
`;

export default class Header extends React.Component {
  componentDidMount() {
    console.log('mount');
  }

  render() {
    return (
      <HeaderWrapper>
        <HomeLink />
        <Navigation />
        <MyAccountButton />
      </HeaderWrapper>
    );
  }
}
