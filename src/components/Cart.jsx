import React from "react";
import { useCart } from "react-use-cart";

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1 className="text-center">Your cart is empty</h1>;
  return (
    <>
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12">
            <h5>
              Unique Items: {totalUniqueItems} Total items in your cart:{" "}
              {totalItems}
            </h5>
            <table className="table table-bordered table-hover table-responsive table-striped">
              <thead className="table-dark">
                <tr>
                  <td>Image</td>
                  <td>Item</td>
                  <td>Price</td>
                  <td>Qty</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img
                          src={item.img}
                          style={{ height: "6rem" }}
                          alt={item.title}
                        />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>
                        <button
                          className="btn btn-warning mx-1"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <button
                          className="btn btn-info mx-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove Item
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-auto ms-auto">Total Price: RS {cartTotal}</div>
          <div className="col-auto">
            <button onClick={() => emptyCart()} 
            className="btn btn-danger">
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
