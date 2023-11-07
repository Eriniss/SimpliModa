import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Button from '../components/public/Button';

/* Style Section */

const Window = styled.div`
  color: #ffffff;
  background-color: #1e1e1e;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: top;
`;

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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 4%;
`;

const Title = styled.div`
  border-bottom: 1px solid #ffffff;
  margin: 30px 0px;
  padding: 30px 0px;
  font-size: 38px;
  margin: 4px;
`;

const Body = styled.div`
  height: 80%;
  font-size: 18px;
  margin: 30px 0px;
  flex: 1;
`;

const RegDate = styled.div`
  font-size: 10px;
  margin: 4px;
  align-self: flex-end;
`;

/* Component Section */

const PostPage = () => {
  const [post, setPost] = useState({
    title: '',
    body: '',
    regDate: '',
    _id: '',
  });
  const { id } = useParams(); // URL 파라미터(id) 가져오기

  useEffect(() => {
    // 개별 포스트 데이터를 가져오는 비동기 함수 호출
    fetchData();
  }, []);

  const formatBody = (body: string) => {
    const textWithLineBreaks = body.replace(/<br>/g, '\n');
    return <pre style={{ whiteSpace: 'pre-wrap', fontSize: '18px' }}>{textWithLineBreaks}</pre>;
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/blogposts/${id}`); // URL 파라미터 사용
      setPost(response.data);
    } catch (error) {
      console.error('데이터 조회 오류:', error);
    }
  };

  const handleDelete = (postId: string) => {
    if (window.confirm('정말로 이 글을 삭제하시겠습니까?')) {
      // 사용자가 확인을 누른 경우에만 삭제 요청을 보냅니다.
      axios
        .delete(`http://localhost:8000/blogposts/${postId}`)
        .then(() => {
          window.location.href = '/blog';
        })
        .catch((error) => {
          console.error('데이터 삭제 중 오류 발생:', error);
        });
    }
  };

  const handleMoveEdit = () => {
    window.location.href = `/Editing/${post._id}`;
  };

  return (
    <Window>
      <Navbar />
      <ContainerBox>
        <TextBox>
          <Title>{post.title}</Title>
          <Body>{formatBody(post.body)}</Body>
          <RegDate>{post.regDate}</RegDate>
          <div>
            <Button onClick={() => handleDelete(post._id)}>글삭제</Button>
            <span style={{ margin: '0 20px' }} />
            <Button backgroundColor="#999999" onClick={handleMoveEdit}>
              글수정
            </Button>
          </div>
        </TextBox>
      </ContainerBox>
    </Window>
  );
};

export default PostPage;
