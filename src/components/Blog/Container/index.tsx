import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

/* Style Section */

const ContainerBox = styled.div`
  color: #ffffff;
  background-color: #111111;
  border-radius: 10px;
  padding: 34px;
  width: 45%;
  height: 80vh;
  margin-top: 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextBox = styled.div`
  width: 100%;
  height: 14%;
  border-bottom: 1px solid #ffffff;
  display: flex;
  flex-direction: column;
  margin-top: 4%;
`;

const Title = styled.div`
  font-size: 24px;
  margin: 4px;
`;

const Body = styled.div`
  font-size: 12px;
  margin: 4px;
  flex: 1;
`;

const RegDate = styled.div`
  font-size: 10px;
  margin: 4px;
  align-self: flex-end;
`;

const Button = styled.button`
  width: 60px;
  height: 25px;
  align-self: flex-end;
`;

interface ContainerProps {
  posts: { title: string; body: string; regDate?: string; _id: any }[];
}

const Container: React.FC<ContainerProps> = ({ posts }) => {
  // regDate를 기준으로 내림차순으로 정렬
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.regDate || '1970-01-01'); // regDate를 Date 객체로 변환
    const dateB = new Date(b.regDate || '1970-01-01');
    return dateB.getTime() - dateA.getTime(); // 내림차순 정렬
  });

  const handleDelete = (postId: string) => {
    if (window.confirm('정말로 이 글을 삭제하시겠습니까?')) {
      // 사용자가 확인을 누른 경우에만 삭제 요청을 보냅니다.
      axios
        .delete(`http://localhost:8000/blogposts/${postId}`)
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          console.error('데이터 삭제 중 오류 발생:', error);
        });
    }
  };

  return (
    <ContainerBox>
      {sortedPosts.map((post, index) => (
        <TextBox key={index}>
          <Link style={{ textDecoration: 'none', color: '#FFFFFF' }} to={`/posts/${post._id}`}>
            <Title>{post.title}</Title>
          </Link>
          <Button onClick={() => handleDelete(post._id)}>글삭제</Button>
          <RegDate>{post.regDate}</RegDate>
        </TextBox>
      ))}
    </ContainerBox>
  );
};

export default Container;
