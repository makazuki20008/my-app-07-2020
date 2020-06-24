import React from 'react';
import './Product.css';

import products from './Storage';

function ProductBag(products) {
  while(products) {
    return (
    <div class="product">
      <img src={products.Image}></img>
      <div>
        <p>Tên sản phẩm: {products.Name}</p>
        <p>Ngày nhập: {products.dateIn}</p>
        <p>Số lượng: {products.total}</p>
        <p>Ghi chú: {products.note}</p>
      </div>
    </div>
    )
  }
}

function Product() {
  return (
    <div className="Product">
        <ul>
            <li>3. Máy khoan pin 235</li>
            <li>2. Máy khoan pin 007</li>
            <li>3. Máy khoan pin 987</li>
            <li>4. Máy khoan pin 799</li>
            <li>5. Máy khoan pin 055</li>
        </ul>
        <div class="product">
          <img src={product1.productImage}></img>
          <div>
            <p>Tên sản phẩm: {product1.name}</p>
            <p>Ngày nhập: {product1.dateIn}</p>
            <p>Số lượng: {product1.total}</p>
            <p>Ghi chú: {product1.note}</p>
          </div>
        </div>
        <div class="product">
          <img src={product2.productImage}></img>
          <div>
            <p>Tên sản phẩm: {product2.name}</p>
            <p>Ngày nhập: {product2.dateIn}</p>
            <p>Số lượng: {product2.total}</p>
            <p>Ghi chú: {product2.note}</p>
          </div>
        </div>
        <div class="product">
          <img src={product3.productImage}></img>
          <div>
            <p>Tên sản phẩm: {product3.name}</p>
            <p>Ngày nhập: {product3.dateIn}</p>
            <p>Số lượng: {product3.total}</p>
            <p>Ghi chú: {product3.note}</p>
          </div>
        </div>
        <div class="product">
          <img src={product4.productImage}></img>
          <div>
            <p>Tên sản phẩm: {product4.name}</p>
            <p>Ngày nhập: {product4.dateIn}</p>
            <p>Số lượng: {product4.total}</p>
            <p>Ghi chú: {product4.note}</p>
          </div>
        </div>
        <div class="product">
          <img src={product5.productImage}></img>
          <div>
            <p>Tên sản phẩm: {product5.name}</p>
            <p>Ngày nhập: {product5.dateIn}</p>
            <p>Số lượng: {product5.total}</p>
            <p>Ghi chú: {product5.note}</p>
          </div>
        </div>
    </div>
  );
}

export default ProductBag;
