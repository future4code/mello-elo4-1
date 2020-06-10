import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  width: 98%;
  margin: auto;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Scroll = styled.div``;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 1px solid red;
  height: 30px;
  align-items: center;
`;

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100%;
  flex-wrap: wrap;
`;
