import React, { Component } from 'react';

class Childcomponent extends Component {
    render() {
        /*this.props là thuộc tính có sẵn của react class component dùng để truyền dữ liệu từ component cha sang component con
            this.props là thuộc tính readOnly => không thể gán lại giá trị cho nó

            */
        let {maSP,tenSanPham,gia,hinhAnh} = this.props.product;
        //bóc tách phần tử trong es 6
        //maSP = this.props.product.maSP
        return (
            <div className='card'>
                <p>{maSP}</p>
                <img src={hinhAnh} alt="..." />
                <div className='card-body'>
                    <p>Tên sản phẩm: {tenSanPham}</p>
                    <p>Giá: {gia}</p>
                </div>
            </div>
        );
    }
}

export default Childcomponent;
