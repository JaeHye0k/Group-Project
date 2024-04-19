import React from "react";
import { Link } from "react-router-dom";
import { Grid, Inner, Title, Wrapper } from "../UserLikes/styled";
import UserBookMarkItems from "./UserBookMarkItems";

const UserBookMark = () => {
  return (
    <Wrapper>
      <Inner>
        <Title>
          <strong>북마크</strong>
          <Link to="/" className="map-link">
            지도로 보기
          </Link>
        </Title>
        <Grid>
          <UserBookMarkItems />
        </Grid>
      </Inner>
    </Wrapper>
  );
};

export default UserBookMark;
