import React from "react";
import { styled } from "styled-components";

const Item = styled.div`
  position: relative;

  em {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    &:after {
      content: "";
      display: block;
      width: 15px;
      height: 15px;
      background: url(/images/ico/ico-like.png) no-repeat center;
      background-size: contain;
    }
  }
  figure {
    height: 300px;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 10px;

    img {
      height: 100%;
      object-fit: cover;
      transition: all 0.4s ease;
    }

    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
`;
const Txt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  p {
    font-size: 10px;
    color: #918b8b;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: keep-all;
  }
`;

const UserLikesItems = () => {
  return (
    <>
      <Item>
        <em></em>
        <figure>
          <img src="/images/dummy/img-dum.png" alt="" />
        </figure>
        <Txt>
          <strong>오래된 나무</strong>
          <p>
            충청남도 어쩌구충청남도 어쩌구충청남도 어쩌구충청남도 어쩌구충청남도
            어쩌구충청남도 어쩌구충청남도 어쩌구충청남도 어쩌구
          </p>
        </Txt>
      </Item>
      <Item>
        <em></em>
        <figure>
          <img src="/images/dummy/img-dum.png" alt="" />
        </figure>
        <Txt>
          <strong>오래된 나무</strong>
          <p>
            충청남도 어쩌구충청남도 어쩌구충청남도 어쩌구충청남도 어쩌구충청남도
            어쩌구충청남도 어쩌구충청남도 어쩌구충청남도 어쩌구
          </p>
        </Txt>
      </Item>
      <Item>
        <em></em>
        <figure>
          <img src="/images/dummy/img-dum.png" alt="" />
        </figure>
        <Txt>
          <strong>오래된 나무</strong>
          <p>
            충청남도 어쩌구충청남도 어쩌구충청남도 어쩌구충청남도 어쩌구충청남도
            어쩌구충청남도 어쩌구충청남도 어쩌구충청남도 어쩌구
          </p>
        </Txt>
      </Item>
      <Item>
        <em></em>
        <figure>
          <img src="/images/dummy/img-dum.png" alt="" />
        </figure>
        <Txt>
          <strong>오래된 나무</strong>
          <p>
            충청남도 어쩌구충청남도 어쩌구충청남도 어쩌구충청남도 어쩌구충청남도
            어쩌구충청남도 어쩌구충청남도 어쩌구충청남도 어쩌구
          </p>
        </Txt>
      </Item>
      <Item>
        <em></em>
        <figure>
          <img src="/images/dummy/img-dum.png" alt="" />
        </figure>
        <Txt>
          <strong>오래된 나무</strong>
          <p>
            충청남도 어쩌구충청남도 어쩌구충청남도 어쩌구충청남도 어쩌구충청남도
            어쩌구충청남도 어쩌구충청남도 어쩌구충청남도 어쩌구
          </p>
        </Txt>
      </Item>
    </>
  );
};

export default UserLikesItems;
