import styled from "styled-components";
import backgroundImage from "../assets/backgroundImage.png";

export const Section = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${backgroundImage});
  background-size: contain;
`;

export const CenterBox = styled.div`
  width: 524px;
  gap: 29px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: "Just Another Hand", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 96px;
  line-height: 96px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 96px;
  color: #fff500;
`;

export const FormBox = styled.div`
  color: white;
  width: 100%;
  gap: 30px;
  height: 667px;
  background-color: #120f33f2;
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  padding: 49px;

  h1 {
    text-align: center;
    margin: 40px 0 20px 0;
  }
`;

export const ButtonLogin = styled.button `
color: #fff;
background-color: #0069FF;
width: 100%;
height: 50px;
border-radius: 6px;
cursor: pointer;
transition-duration: 0.3s;


:hover {
background-color: #4085E7;
}
`;

export const ButtonSignup = styled.button `
color: #fff;
background-color: #0069FF;
width: 100%;
height: 50px;
border-radius: 6px;
cursor: pointer;
transition-duration: 0.3s;

:hover {
background-color: #4085E7;
}
`;

export const InputLogin = styled.input`
color: #fff;
padding-left: 30px;
background-color: transparent;
width: 100%;
height: 50px;
border: 1px solid #FFFFFF;
border-radius: 6px;
::placeholder {
  color: #C4C4C4;
}

`;

export const InputPassword = styled.input `
color: #fff;
padding-left: 30px;
background-color: transparent;
width: 100%;
height: 50px;
border: 1px solid #FFFFFF;
border-radius: 6px;
::placeholder {
  color: #C4C4C4;
}


`


