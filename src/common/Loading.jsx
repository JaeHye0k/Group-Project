import React from "react";
import { styled } from "styled-components";

const Figure = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loading = () => {
  return (
    <Figure>
      <img src="/images/dummy/loading.gif" alt="" />
    </Figure>
  );
};

export default Loading;
