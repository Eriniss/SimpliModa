import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'; // Axios 추가

import Navbar from '../components/Navbar';
import Container from '../components/Blog/Container';

/* Style Section */

const Body = styled.div`
  color: #ffffff;
  background-color: #1e1e1e;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: top;
`;

/* Component Section */

interface Post {
  _id: string;
  title: string;
  body: string;
  // 추가 필드를 여기에 추가할 수 있음
}

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Axios를 사용하여 Express API에서 데이터 가져오기
    axios
      .get<Post[]>('http://localhost:8000/blogPosts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('API 호출 중 오류:', error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Body>
        <Container />
      </Body>
    </div>
  );
};

export default BlogPage;
