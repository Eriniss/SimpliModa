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
  height: 80%;
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

const PostingPage = () => {
  const [postTitle, setPostTitle] = useState<string>('');
  const [postBody, setPostBody] = useState<string>('');
  const [postRegDate, setPostRegDate] = useState<string>(''); // 초기값은 비워둡니다.

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // 2자리 숫자로 변환
    const day = currentDate.getDate().toString().padStart(2, '0');
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostTitle(e.target.value);
  };

  const handleChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostBody(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 줄 바꿈 문자 '\n'을 <br>로 대체하여 HTML 줄 바꿈 효과를 생성
    const formattedBody = postBody.replace(/\n/g, '<br>');

    const currentDate = getCurrentDate(); // getCurrentDate 함수를 사용하여 현재 날짜와 시간을 가져옵니다.
    setPostRegDate(currentDate); // 먼저 postRegDate를 설정합니다.

    const postData = {
      title: postTitle,
      body: formattedBody,
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
    window.location.href = '/blog';
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

export default PostingPage;
