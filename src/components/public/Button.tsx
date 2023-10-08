import React from 'react';
import styled from 'styled-components';

import { ButtonProps } from '../../types/components/public';

/* Style section */
const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.backgroundColor || '#6a5acd'};
  border-radius: ${(props) => props.radius || '5px'};
  font-size: ${(props) => props.fontSize || '24px'};
  height: ${(props) => props.height || '40px'};
  width: ${(props) => props.width || '120px'};
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor || props.backgroundColor || '#574aaa'};
  }
`;

/* Button Component */

const Button = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
