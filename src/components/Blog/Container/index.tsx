import React from 'react';
import styled from 'styled-components';

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

const Container = () => {
  return (
    <ContainerBox>
      <TextBox>
        <Title>Test Title</Title>
        <Body>Test Body</Body>
        <RegDate>2023-10-23 16:02</RegDate>
      </TextBox>
      <TextBox>
        <Title>Test Title</Title>
        <Body>Test Body</Body>
        <RegDate>2023-10-23 16:02</RegDate>
      </TextBox>
      <TextBox>
        <Title>Test Title</Title>
        <Body>Test Body</Body>
        <RegDate>2023-10-23 16:02</RegDate>
      </TextBox>
      <TextBox>
        <Title>Test Title</Title>
        <Body>Test Body</Body>
        <RegDate>2023-10-23 16:02</RegDate>
      </TextBox>
      <TextBox>
        <Title>Test Title</Title>
        <Body>Test Body</Body>
        <RegDate>2023-10-23 16:02</RegDate>
      </TextBox>
    </ContainerBox>
  );
};

export default Container;
