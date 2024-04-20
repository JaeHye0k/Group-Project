import React from "react";
import { styled } from "styled-components";

export const Title = styled.strong`
  display: flex;
  padding-bottom: 20px;
  font-size: 30px;
  border-bottom: 1px solid #ccc;
`;
const UserTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

export default UserTitle;
