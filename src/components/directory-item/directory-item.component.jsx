import { Link } from "react-router-dom";
import "./directory-item.styles.js";
import {
  BackgroundImage,
  DirectoryItemContainer,
  Body,
} from "./directory-item.styles.js";

const CategoryItem = ({ category }) => {
  const { id, title, imageUrl } = category;
  return (
    <DirectoryItemContainer key={id}>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <Body>
        <h2>{title}</h2>
        <Link to={`/shop/${title}`}>Shop Now</Link>
      </Body>
    </DirectoryItemContainer>
  );
};

export default CategoryItem;
