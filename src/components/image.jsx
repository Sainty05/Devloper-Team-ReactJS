import React from "react";

export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
        <a rel="manoj" href={"https://manoj-singh-chouhan-2.netlify.app"} title={title} data-lightbox-gallery="gallery1" target='_blank'>
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img src={smallImage} className="img-responsive" alt={title} />{" "}
        </a>{" "}
      </div>
    </div>
  );
};
