import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.h1`
  margin-left: 10%;
`;

export const HyperlinkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 500px;
  margin-left: 10%;
  margin-bottom: 5px;
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

export const DetailsContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 10px;
  min-height: 600px;
`;

export const ProductContainer = styled.div`
  display: flex;
  margin-left: 10%;
  justify-content: center;
`;

export const ProductImage = styled.img`
  min-width: 250px;
  max-width: 600px;
  min-height: 500px;
  max-height: 500px;
`;

export const Sidebar = styled.div`
  margin-right: 10%;
  max-width: 500px;
`;

export const Product = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1px;
  margin-bottom: 9.5px;
  height: 92px;
  width: 450px;
  border: 1px solid #584da8;
  border-top: none;
  border-right: none;
  border-left: none;
  &:hover {
    transition-duration: 300ms;
    color: #584da8;
  }
`;

export const PriceParagraph = styled.h1`
  display: flex;
  width: 90%;
  justify-content: flex-start;
`;

export const ProductParagraph = styled.p`
  margin-left: 10px;
  display: flex;
  width: 80%;
  justify-content: flex-start;
  &:hover {
    transition-duration: 300ms;
    color: #584da8;
  }
`;

export const AddToCartButton = styled.p`
  margin-left: 10px;
  display: flex;
  width: 100%;
  justify-content: center;
  &:hover {
    transition-duration: 300ms;
    color: #584da8;
  }
`;

export const ProductDescriptionHeader = styled.h3`
  margin-left: 10%;
`;

export const DescriptionContainer = styled.div`
  padding-top: 50px;
  background-color: white;
  display: flex;
  flex-direction: column;
  min-height: 200px;
`;

export const ProductDescription = styled.div`
  margin-left: 10%;
  max-width: 80%;
`;