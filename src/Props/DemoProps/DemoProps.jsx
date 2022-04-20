import React, { Component } from 'react';
import Childcomponent from './ChildComponent';

class Demoprops extends Component {
    render() {
        let productA = {
            maSP:1,
            tenSanPham:'Iphone',
            gia:1000,
            hinhAnh:'https://picsum.photos/200/300'
        }
        let productB = {
            maSP:2,
            tenSanPham:'Iphone X',
            gia:2000,
            hinhAnh:'https://picsum.photos/200/300'
        }
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
                        <Childcomponent product={productA}/>
                    </div>
                    <div className='col-4'>
                        <Childcomponent product={productB}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Demoprops;
