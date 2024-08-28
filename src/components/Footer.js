import React from "react";
import styled from "styled-components";
import { useTheme } from "../contexts/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  console.log("footer 렌더링");
  return (
    <Wrapper>
      <h3>Footer</h3>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  height: 60px;
  width: 100%;
  background-color: blue;
  text-align: center;
`;
