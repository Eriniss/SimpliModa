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
  height: 100%;
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

const RegDate = styled.div`
  font-size: 10px;
  margin: 4px;
  align-self: flex-end;
`;

/* Component Section */

const Editing = () => {
  const [post, setPost] = useState({
    title: '',
    body: '',
    regDate: '',
    _id: '',
  });
  const [updatedTitle, setUpdatedTitle] = useState(''); // State to store updated title
  const [updatedBody, setUpdatedBody] = useState(''); // State to store updated body
  const [updatedPostRegDate, setUpdatedPostRegDate] = useState<string>(''); // 초기값은 비워둡니다.
  const { id } = useParams(); // URL 파라미터(id) 가져오기

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // 2자리 숫자로 변환
    const day = currentDate.getDate().toString().padStart(2, '0');
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  useEffect(() => {
    // 개별 포스트 데이터를 가져오는 비동기 함수 호출
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/blogposts/${id}`); // URL 파라미터 사용
      setPost(response.data);
      setUpdatedTitle(response.data.title);
      setUpdatedBody(response.data.body);
      setUpdatedPostRegDate(response.data.regDate);
    } catch (error) {
      console.error('데이터 조회 오류:', error);
    }
  };

  const handleUpdate = () => {
    const currentDate = getCurrentDate(); // getCurrentDate 함수를 사용하여 현재 날짜와 시간을 가져옵니다.
    setUpdatedPostRegDate(currentDate); // 먼저 postRegDate를 설정합니다.

    // Prepare the updated post data
    const updatedPost = {
      title: updatedTitle,
      body: updatedBody,
      regDate: currentDate,
    };

    axios
      .put(`http://localhost:8000/blogposts/${post._id}`, updatedPost)
      .then((response) => {
        if (response.status === 200) {
          // Update successful, navigate to the updated post
          window.location.href = `/posts/${post._id}`;
        }
      })
      .catch((error) => {
        console.error('Data update error:', error);
      });
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

  return (
    <Window>
      <Navbar />
      <ContainerBox>
        <TextBox>
          <TitleBox type="text" value={updatedTitle || post.title} onChange={(e) => setUpdatedTitle(e.target.value)} />
          <BodyBox value={updatedBody || post.body} onChange={(e) => setUpdatedBody(e.target.value)} />
          <RegDate>{post.regDate}</RegDate>
          <div>
            <Button onClick={() => handleDelete(post._id)}>글삭제</Button>
            <span style={{ margin: '0 20px' }} />
            <Button onClick={handleUpdate}>저장</Button>
          </div>
        </TextBox>
      </ContainerBox>
    </Window>
  );
};

export default Editing;
