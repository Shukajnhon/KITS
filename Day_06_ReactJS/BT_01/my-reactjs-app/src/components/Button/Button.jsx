import React from 'react';
import styled from 'styled-components';
import arrowUp from 'assets/images/arrow-up.svg';
import arrowDown from 'assets/images/arrow-down.svg';

const Button = ({
  percent,
  width,
  height,
  bgColor,
  borderColor,
  borderRadius,
  textColor,
  fontSize,
  children,
  ...rest
}) => {
  return (
    <StyleButton
      percent={percent}
      width={width}
      height={height}
      bgColor={bgColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      textColor={textColor}
      fontSize={fontSize}
      {...rest}
    >
      {percent && <img src={percent < 0 ? arrowDown : arrowUp} alt="arr" />}
      {children}
    </StyleButton>
  );
};

export {Button};

const StyleButton = styled.button`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  border: ${(props) =>
    props.borderColor ? `1px solid ${props.borderColor}` : 'none'};
  border-radius: ${(props) =>
    props.borderRadius ? `${props.borderRadius}px` : 'none'};
  background: ${(props) => props.bgColor};
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
  color: ${(props) => (props.percent < 0 ? 'red' : '#747475')};
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.fontSize};
  img {
    margin-right: 8px;
  }
`;
Button.defaultProps = {
  backgroundColor: '#ccc',
  textColor: '#000',
  width: 128,
  height: 46,
  fontSize: 16,
};
