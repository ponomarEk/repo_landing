import React from "react";
import likedPng from "../../styles/liked.png";
import notLikedPng from "../../styles/notLiked.png";
import "./proposal.css";

const Proposal = (props) => {
  const { photoUrl, priceText, description, place, size, isLiked, sale } =
    props;
  return (
    <div className="proposal">
      <img src={photoUrl} alt="proposal_img" className="proposal_img" />
      {!!sale ? (
        <p className="price sale_price">
          <span>{sale}</span> <s>{priceText}</s>
        </p>
      ) : (
        <p className="price">{priceText}</p>
      )}
      {isLiked ? (
        <span className="like_state">
          <img src={likedPng} alt="liked" />
        </span>
      ) : (
        <span className="like_state">
          <img src={notLikedPng} alt="not-liked" />
        </span>
      )}
      <p className="proposal_description">{description}</p>
      <p className="proposal_place">{place}</p>
      <span className="proposal_size">{size}</span>
    </div>
  );
};
export default Proposal;
