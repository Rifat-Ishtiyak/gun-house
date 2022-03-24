import React from 'react';

const Product = ({product}) => {
    const {name}=product;

    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Product;