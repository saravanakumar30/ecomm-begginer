import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Product from "./Product";

function Header() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div>
      <h1 style={{ color: "#0a7dc3", textAlign: "center" }}>
        Ecommerce Website with Display Functionlity for Absolute Beginners
      </h1>

      {product.length === 0 ? (
        <Loading />
      ) : (
        <div className="cards">
          {product.map((item, index) => (
            <Product key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Header;
