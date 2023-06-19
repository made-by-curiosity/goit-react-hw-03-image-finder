import styled from '@emotion/styled';

export const LoadMoreBtn = styled.button`
  width: 180px;
  padding: 8px 16px;
  margin-left: auto;
  margin-right: auto;

  display: inline-block;

  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  color: #fff;
  text-decoration: none;

  background-color: #3f51b5;

  border: 0;
  border-radius: 2px;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;
