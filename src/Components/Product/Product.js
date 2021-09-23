import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>By:{seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button className="purchase-button">add to cart</button>
            </div>
        </div>
    );
};

export default Product;