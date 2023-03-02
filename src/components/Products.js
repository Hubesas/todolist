import React from 'react';

const Products = ({product}) => {

    let style = {
        price: ``,
        discount: ``,
        rating: ``,
        stock: ``,
    }

    if (product.price > 500) {
        style.price = `red`
    }
    else {
        if (product.price > 100) {
            style.price = `orange`
        }
        else {
            if (product.price > 50) {
                style.price = `yellow`
            }
            else {
                style.price = `green`
            }
        }

    }
    if (product.discountPercentage > 20) {
        style.discount = `green`
    }
    if (product.rating > 4.5) {
        style.rating = `2px dotted blue`
    }
    if (product.stock < 30) {
        style.stock = `70%`
    }


    return (
        <div className="prod"  style={{backgroundColor: style.discount, border: style.rating, opacity: style.stock}} >
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h3 style={{backgroundColor: style.price}} >Price: {product.price}$</h3>
            <h5>Discount: {product.discountPercentage}%</h5>
            <h5>Rating: {product.rating}</h5>
            <h5>Stock: {product.stock}</h5>
            <img src={product.thumbnail} alt=""/>
        </div>
    );
};

export default Products;