import React, { Component } from 'react';

class Product extends Component {
    render() {
        let {product} = this.props;
        return (
            <div className='card'>
                <p>{product.id}</p>
                <img src={product.image} alt="" />
                <div className='card-body'>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <button className='btn text-white' style={{backgroundColor:'#000'}}>Mua Ngay</button>
                </div>
            </div>
        );
    }
}

export default Product;
