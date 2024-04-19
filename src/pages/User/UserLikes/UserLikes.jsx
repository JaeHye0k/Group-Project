import React from "react";
import { Grid, Inner, Title, Wrapper } from "./styled";
import UserLikesItems from "./UserLikesItems";

const UserLikes = () => {
  return (
    <Wrapper>
      <Inner>
        <Title>
          <strong>즐겨찾기</strong>
        </Title>
        <Grid>
          <UserLikesItems />
        </Grid>
      </Inner>
    </Wrapper>
  );
};

export default UserLikes;
