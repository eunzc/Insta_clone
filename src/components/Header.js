import React from 'react';
import styled from 'styled-components';

import { FaHeart, FaPaperPlane } from 'react-icons/fa';
import { FaSignal, FaWifi, FaBatteryFull } from 'react-icons/fa';


const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin-left: 15px;
  }
`;
const Text = styled.div`
font-size: 24px;
font-weight: 600;
`;

const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin-left: 5px;
  }
`;
const TimeText = styled.div`
flex-grow:1;
font-size:16px;
font-weight: 500;
`;

const Header = () => {
  return (
    <>
    <TimeContainer>
      <TimeText>10:00</TimeText>
    <FaSignal />
      <FaWifi />
      <FaBatteryFull />
    </TimeContainer>
    <HeaderContainer>
      <Text>Instagram</Text>
      <IconsContainer>
        <FaHeart />
        <FaPaperPlane />
      </IconsContainer>
    </HeaderContainer>
    </>
  );
};

export default Header;
