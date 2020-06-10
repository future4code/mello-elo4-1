import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #f1f1f1;
`;

export const DetailsContainer = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 800px;
  grid-gap: 10px;
  min-width: 90vw;
  padding: 10px;
  margin: 0 auto;
`;

export const DescriptionContainer = styled.div`
  background-color: white;
  display: flex;
  min-width: 90vw;
  height: 100px;
`;

export const SectionLink = styled.a`
  text-decoration: none;
  color: #584da8;

  &:visited {
    color: #584da8;
  }

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const HyperlinkContainer = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export const Sidebar = styled.div``;

export const ProductParagraph = styled.p`
  display: flex;
  width: 65%;
  justify-content: space-evenly;
`;

export const ProductContainer = styled.div``;

export const ProductImage = styled.img``;

export const Product = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1px;
  margin-bottom: 9.5px;
  height: 92px;
  width: 500px;
  border: 1px solid #584da8;
`;
