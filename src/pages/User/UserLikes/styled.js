import { styled } from "styled-components";

export const Wrapper = styled.div``;

export const Inner = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 20px;
`;
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 25px;

  strong {
    font-size: 32px;
    color: #000;
  }

  a {
    padding: 10px 20px;
    color: #fff;
    background: #000;
    border-radius: 10px;
  }
`;

export const Grid = styled.div`
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
