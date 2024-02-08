import { Link } from "react-router-dom";
import "./directory-item.styles.js";
import {
  BackgroundImage,
  DirectoryItemContainer,
  Body,
} from "./directory-item.styles.js";

const DirectoryItem = ({ category }) => {
  const { id, title, imageUrl } = category;
  return (
    <DirectoryItemContainer key={id}>
      <BackgroundImage imageurl={imageUrl}></BackgroundImage>
      <Body>
        <h2>{title}</h2>
        <Link to={`/shop/${title}`}>Shop Now</Link>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
