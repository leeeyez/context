import React from "react";
import ReviewList from "../components/ReviewList";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useTheme } from "../contexts/ThemeContext";
import { localeStyle, themeStyle } from "../style/style";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocale } from "../contexts/LocaleContext";

const ReviewPage = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { locale, setLocale } = useLocale();

  return (
    <>
      <Header />
      <Wrapper
        bgColor={themeStyle[theme]["bgColor"]}
        textColor={themeStyle[theme]["textColor"]}
      >
        <h1>테마 : {theme}</h1>
        <h1>언어 : {locale}</h1>
        <select onChange={(e) => setLocale(e.target.value)} value={locale}>
          <option value={"ko"}>한국어</option>
          <option value={"en"}>영어</option>
        </select>

        <button onClick={() => navigate("/create")}>
          {localeStyle[locale]["writeBtn"]}
        </button>
        <ReviewList />
      </Wrapper>
      <Footer />
    </>
  );
};

export default ReviewPage;

const Wrapper = styled.div`
  padding: 50px 100px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
`;
