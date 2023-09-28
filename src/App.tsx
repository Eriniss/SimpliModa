import React from 'react';
import styled from 'styled-components';

import Navbar from './components/public/Navbar';

const Mainbody = styled.div`
  color: #ffffff;
  background-color: #222222;
`;

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <body>body</body>
      <footer>footer</footer>
    </>
  );
};

export default App;
