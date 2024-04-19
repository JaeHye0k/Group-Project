import React from "react";
import { styled } from "styled-components";
import UserLikesItems from "./UserLikesItems";

const Wrapper = styled.div``;

const Inner = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 20px;
`;
const Title = styled.div`
  font-size: 32px;
  color: #000;
  padding-bottom: 25px;
  border-bottom: 1px solid #ccc;
`;

const Grid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const UserLikes = () => {
  return (
    <Wrapper>
      <Inner>
        <Title>즐겨찾기</Title>
        <Grid>
          <UserLikesItems />
        </Grid>
      </Inner>
    </Wrapper>
  );
};

export default UserLikes;
