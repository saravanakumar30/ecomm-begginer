import React from "react";

function Product({ item }) {
  const { title, description, image } = item;
  return (
    <>
 

      <div className="col-3 m-4">
        <div className="card">
          <img src={image} alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description} </p>
          </div>
       <button className="btn btn-primary">Buy</button>
        </div>
      </div>
    </>
  );
}

export default Product;
