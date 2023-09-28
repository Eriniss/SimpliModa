import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Palette } from '../../static/palette-fill.svg';
import { ReactComponent as Sun } from '../../static/brightness-high.svg';

import Button from '../public/Button';

/* style section */

const DarkmodeNav = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #111111;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.div`
  color: #6a5acd;
  font-weight: bold;
  font-size: 24px;
  margin: 0 87px;
`;

const Logo = styled.div`
  color: #6a5acd;
  display: flex;
  justify-content: left;
  align-items: left;
`;

const LogoLabel = styled.div`
  color: #6a5acd;
  font-weight: bold;
  font-size: 24px;
  margin: 0 87px 0 10px;
`;

/* component section */

const Navbar = () => {
  return (
    <DarkmodeNav>
      <Logo>
        <Palette width={34} height={34} />
        <LogoLabel>SimpliModa</LogoLabel>
      </Logo>
      <Label>공지사항</Label>
      <Label>자유게시판</Label>
      <Label>블로그</Label>
      <Logo style={{ margin: '0 30px' }}>
        <Sun width={34} height={34} />
      </Logo>
      <Button>로그인</Button>
    </DarkmodeNav>
  );
};

export default Navbar;
