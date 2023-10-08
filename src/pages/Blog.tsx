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

/* Component Section */

const Blog = () => {
  return (
    <div>
      <Navbar />
      <Body>Hi!</Body>
    </div>
  );
};

export default Blog;
