import React, { useState } from "react";
import ItemCard from "./ItemCard";
import productData from "./data";

function Home() {
  return (
    <div className="container py-4">
      <h1 className="text-center">Add to Cart Example</h1>
      <div className="row justify-content-center">
        {productData.map((item, index) => {
          return (
            <ItemCard
              key={index}
              img={item.img}
              desc={item.desc}
              title={item.title}
              price={item.price}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
