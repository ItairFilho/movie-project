import styled from "styled-components";

export const Input = styled.input<{ error: boolean }>`
  font-size: 15px;
  color: #fff;
  padding-left: 30px;
  background-color: transparent;
  width: 100%;
  height: 50px;
  border: ${(props) => (props.error ? "1px solid red" : "1px solid #ffffff")};
  border-radius: 6px;
  &:focus {
    ${(props) => (props.error ? "1px solid red" : "1px solid #ffffff")};
    outline: none;
  }
  ::placeholder {
    color: ${(props) => (props.error ? "red" : "#7f8c8d")};
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    color: red;
  }
`;
