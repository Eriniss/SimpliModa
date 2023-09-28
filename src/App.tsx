import React from 'react';
import styled from 'styled-components';

import Navbar from './components/Navbar';

/* Style Section */

const AppContainer = styled.div`
  background-color: #1e1e1e;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainLabel = styled.div`
  font-size: 84px;
  color: #6a5acd;
  margin-bottom: 200px;
`;

const SubLabel = styled.div`
  font-size: 34px;
  color: #ffffff;
  margin-bottom: 30px;
`;

/* Component Section */

const App = () => {
  return (
    <>
      <Navbar />
      <AppContainer>
        <SubLabel>트렌디한 웹사이트를 위한 프로젝트</SubLabel>
        <MainLabel>Project SimpliModa</MainLabel>
      </AppContainer>
    </>
  );
};

export default App;
