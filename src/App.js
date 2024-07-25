import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Stories from './components/Stories';
import Feed from './components/Feed';
import Footer from './components/Footer';

const AppContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  padding: 20px;
   @media (max-width: 768px) {
    padding: 10px; 
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Stories />
      <Feed />
      <Footer />
    </AppContainer>
  );
}

export default App;
