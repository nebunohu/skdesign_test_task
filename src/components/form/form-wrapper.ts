import styled from "styled-components";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 30px;

  width: 440px;

  background: #FFFFFF;
  box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
  border-radius: 8px;
  box-sizing: border-box;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 30px 60px;

  @media screen and (max-width: 390px) {
    width: 90%;
    box-sizing: border-box;
    margin: 20px 0;
  }
`;

export default FormWrapper