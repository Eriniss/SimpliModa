import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Palette width={34} height={34} />
        </Link>
        <LogoLabel>SimpliModa</LogoLabel>
      </Logo>
      <Link to="/blog" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Label>개발자 블로그</Label>
      </Link>
      <Logo style={{ margin: '0 30px' }}>
        <Sun width={34} height={34} />
      </Logo>
      <Link to="/post">
        <Button>글 작성</Button>
      </Link>
    </DarkmodeNav>
  );
};

export default Navbar;
