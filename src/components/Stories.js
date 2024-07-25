import React from 'react';
import styled from 'styled-components';
import Story from './Story';

import aaImg from '../images/aa.jpg';
import bbImg from '../images/bb.jpg';
import ccImg from '../images/cc.jpg';
import ddImg from '../images/dd.jpg';

const StoriesContainer = styled.div`
  display: flex;
  padding: 5px;
  background-color: #fff;
  border-bottom: 0.5px solid #dbdbdb;
  overflow-x: auto;

   @media (max-width: 768px) {
    padding: 3px;
  }

`;

const Stories = () => {
  return (
    <StoriesContainer>
      <Story image={aaImg} alt="nayana" borderColor="#CCCCCC" />
      <Story image={bbImg} alt="friend_1" borderColor="#f5007a"/>
      <Story image={ccImg} alt="closefriend" borderColor="#90EE90"/>
      <Story image={ddImg} alt="good_123" borderColor="#90EE90" />
    </StoriesContainer>
  );
};

export default Stories;
