import React from "react";
import styled from "styled-components";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const { theme } = useTheme();
  console.log("header 렌더링");
  return (
    <Wrapper>
      <h3>Mutsa Front Movie Review</h3>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: red;
  text-align: center;
  z-index: 999;
`;
