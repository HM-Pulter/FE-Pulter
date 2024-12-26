import "styled-components";

const colors = {
  primary1: "#51B1A6",
  primary2: "#9CE5CB",
  primary3: "#EAF6E4",
  black: "24243F",
  gray: "5A5A75",
};
export const lightTheme = {
  color: "#FFFFFF",
  bgColor: "#000000",
  gray: "#D9D9D9",
};
const fontSize = {
  s: "0.815rem",
  m: "1rem",
  lg: "1.25rem",
};
const size = {
  xs: "0.5rem",
  s: "1rem",
  m: "1.5rem",
};
const theme = {
  colors,
  lightTheme,
  fontSize,
  size,
};

export default theme;

/** 타입 재정의를 위함 ( "styled-components" 변수 타입 추론을 위함( 자동완성 ) ) */
export type Theme = typeof theme;
