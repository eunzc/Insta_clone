import React from 'react';
import styled from 'styled-components';

import {FaHome, FaSearch, FaPlusSquare, FaVideo ,FaUserCircle} from 'react-icons/fa';

const FtContainer = styled.div`
 margin-bottom: 10px;
 `;

const FooterContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  border-top: 1px solid #dbdbdb;
  text-align: center;
`;
const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around; 
  align-items: center; 
`;

const Footer = () => {
  return (
    <>
    <FtContainer />  
    <FooterContainer>
      <IconsContainer>
        <FaHome />
        <FaSearch />
        <FaPlusSquare />
        <FaVideo />
        <FaUserCircle />
      </IconsContainer>
    </FooterContainer>
    <FtContainer />
    </>
  );
};

export default Footer;

