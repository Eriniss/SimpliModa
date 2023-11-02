import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Navbar from '../components/Navbar';
import Button from '../components/public/Button';

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

const Container = styled.form`
  width: 50%;
  height: 80%;
  background-color: #111111;
  border-radius: 15px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: top;
`;

const TitleBox = styled.input`
  width: 80%;
  height: 40px;
  outline: none;
  background: transparent;
  padding: 10px;
  margin-top: 40px;
  border: none;
  border-bottom: 1px solid #ffffff;
  color: #ffffff;
  font-size: 28px;
  font-weight: bold;
  background-color: transparent;
  display: flex;
  &:focus {
    background-color: #1e1e1e;
  }
`;

const BodyBox = styled.textarea`
  width: 80%;
  height: 60%;
  outline: none;
  background: transparent;
  padding: 0;
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  &:focus {
    background-color: #1e1e1e;
  }
`;

/* Component Section */

const PostPage = () => {
  const [postTitle, setPostTitle] = useState<string>('');
  const [postBody, setPostBody] = useState<string>('');
  const [postRegDate, setPostDate] = useState<string>(''); // 초기값은 비워둡니다.

  const getCurrentDate = () => {
    const currentDate = new Date();
    return `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}`;
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostTitle(e.target.value);
  };

  const handleChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostBody(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const currentDate = getCurrentDate(); // getCurrentDate 함수를 사용하여 현재 날짜와 시간을 가져옵니다.
    setPostDate(currentDate); // 먼저 postRegDate를 설정합니다.

    const postData = {
      title: postTitle,
      body: postBody,
      regDate: currentDate, // 이제 postRegDate에 현재 날짜와 시간이 들어갑니다.
    };

    axios
      .post('http://localhost:8000/blogposts', postData)
      .then((response) => {
        console.log('데이터가 성공적으로 서버로 전송되었습니다.');
      })
      .catch((error) => {
        console.error('데이터 전송 중 오류 발생:', error);
      });
  };

  const handleClickButton = () => {
    const postData = {
      title: postTitle,
      body: postBody,
      regDate: postRegDate,
    };

    axios
      .post('http://localhost:8000/blogposts', postData)
      .then((response) => {
        console.log('데이터가 성공적으로 서버로 전송되었습니다.');
        // 페이지를 이동하도록 처리
        window.location.href = '/blog'; // '/' 경로로 이동
      })
      .catch((error) => {
        console.error('데이터 전송 중 오류 발생:', error);
      });
  };

  return (
    <Body>
      <Navbar />
      <Container onSubmit={handleSubmit}>
        <TitleBox placeholder="제목을 입력하세요" onChange={handleChangeTitle} value={postTitle} />
        <BodyBox placeholder="내용을 입력하세요" onChange={handleChangeBody} value={postBody} />
        <Button onClick={handleClickButton}>저장</Button>
      </Container>
    </Body>
  );
};

export default PostPage;
