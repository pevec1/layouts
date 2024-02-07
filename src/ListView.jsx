import React from "react";
import { v4 as uuidv4 } from "uuid";

function ListView({ items }) {
  return (
    <ul className="list">
      {items.map((item, index) => (
        <li className="shop-item" key={index}>
          <figure className="thumb">
            <img src={item.img}></img>
          </figure>
          <h2 className="title">{item.name}</h2>
          <p className="desc">{item.color}</p>
          <p className="price">$ {item.price}</p>
          <button className="btn">Add to cart</button>
        </li>
      ))}
    </ul>
  );
}

export default ListView;

//     {(profile.map((el,i) => (<img key={uuidv4()} src={el.img} alt={el.category} />)))}
