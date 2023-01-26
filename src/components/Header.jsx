import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
          <h2 className='logo'>Raza Store</h2>
        </NavLink>
        <Nav/>
    </MainHeader>
  )
}

const MainHeader = styled.header`
padding: 0 4.8rem;
height: 10rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
.logo {
  border: 2px solid black;
  padding: 8px;
  border-top-left-radius: 16px;
  border-bottom-right-radius: 16px;
}
`;
export default Header;