import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";
function Card({ item }) {
  // console.log(item, "itemImg");

  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imagecontainer">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bethroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bethroom} bethroom</span>
            </div>
            </div>
            <div className="icons">
              <div className="icon">
                <img src="/save.png" alt="" />
              </div>
              <div className="icon">
                <img src="/chat.png" alt="" />
              </div>
            </div>
  
        </div>
      </div>
    </div>
  );
}

export default Card;
