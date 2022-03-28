import styled from 'styled-components';

const TextAreaWrapper = styled.div`
  max-width: 940px;
  margin-left: 60px;
  font-size: 14px;

  @media screen and (max-width: 390px) {
    width: 100%;
    margin: 0px;
    padding: 30px 30px 0 30px;
    box-sizing: border-box;

    & img {
      width: 100%;
    }
  }
`;

export default TextAreaWrapper;