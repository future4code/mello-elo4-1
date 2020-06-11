import styled from "styled-components";

export const MainContainer = styled.div`
  width: 98%;
  height: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Scroll = styled.div`
  overflow: auto;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 100%;
`;

export const Category = styled.div`
 margin-top: 5px;
 cursor: pointer;
`
