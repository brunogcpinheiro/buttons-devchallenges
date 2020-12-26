import styled from "styled-components";

export const Wrapper = styled.aside`
  width: 237px;
  height: 100vh;
  background-color: #fafbfd;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h3`
  padding-top: 30px;
  span {
    color: #f7542e;
  }
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-top: 122px;
  width: 134px;

  li {
    color: #9e9e9e;

    & + li {
      margin-top: 20px;
    }
  }
`;
