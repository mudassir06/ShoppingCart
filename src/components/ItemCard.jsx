import React from "react";
import { useCart } from "react-use-cart";

function ItemCard(props) {
  const { addItem } = useCart();
  return (
    <>
      <div className="col-md-3 mb-4">
        <div className="card h-100 shadow">
          <img src={props.img} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h5 className="card-title">RS, {props.price}</h5>
            <p className="card-text">{props.desc}</p>
            <button type="button" onClick={() => addItem(props.item)}
             className="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
