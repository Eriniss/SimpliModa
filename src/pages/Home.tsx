import React from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar';

/* Style Section */

const Body = styled.div`
  color: #ffffff;
  background-color: #1e1e1e;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 84px;
  color: #6a5acd;
  margin-bottom: 200px;
`;

const Label = styled.div`
  font-size: 34px;
  color: #ffffff;
  margin-bottom: 30px;
`;

/* Component Section */

const Home = () => {
  return (
    <div>
      <Navbar />
      <Body>
        <Label>트렌디한 웹사이트를 위한 프로젝트</Label>
        <Title>Project SimpliModa</Title>
      </Body>
    </div>
  );
};

export default Home;
