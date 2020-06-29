import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/Header.css';

const HeaderWrapper = styled.div`
  flex-direction: row;
  width: 100%;
  height: 100px;
  display: flex;
`;

const HomeLink = styled.a`
  display: flex;
  background: url(./mstile-150x150.png) 50px;
  width: 70px;
  height: 100%;
  background-size: 84px;
  background-repeat: no-repeat;
  background-position: 0px 8px;
  cursor: pointer;
`;

const Navigation = styled.nav`
  display: flex;
  flex-grow: 1;
  padding-top: 15px;
  padding-left: 20px;
`;

const NavigationList = styled.ul`
  flex-direction: row;
  display: flex;
  list-style: none;
`;

const NavigationItem = styled.li`
  margin-right: 23px;
  font-weight: 600;
  height: 26px;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid #ffffff;
  }
`;

const MyAccount = styled.ul`
  display: flex;
  width: 15%;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  padding: 10px;
`;

export default class Header extends React.Component {
  componentDidMount() {
    console.log('mount');
  }

  render() {
    return (
      <HeaderWrapper>
        <HomeLink />
        <Navigation>
          <NavigationList>
            <NavigationItem>Buy</NavigationItem>
            <NavigationItem>Rent</NavigationItem>
            <NavigationItem>Sold</NavigationItem>
            <NavigationItem>New Home</NavigationItem>
            <NavigationItem>Find Agents</NavigationItem>
            <NavigationItem>Blog</NavigationItem>
            <NavigationItem>Commercial</NavigationItem>
          </NavigationList>
        </Navigation>
        <MyAccount>
          <StyledFontAwesomeIcon icon="star" size="2x" />
          <StyledFontAwesomeIcon icon="bell" size="2x" />
          <StyledFontAwesomeIcon icon="user" size="2x" />
        </MyAccount>
      </HeaderWrapper>
    );
  }
}
