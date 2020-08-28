// https://fettblog.eu/typescript-react/styles/
// @ddprrt
// Cách 2: CSS.Properties
import React, { Component } from 'react';

// sử dụng CSS từ thư viện csstype có sẵn
import CSS from 'csstype';

// tạo biến số chứa các thuộc tính css
// biến số này có kiểu CSS.Properties
const h1Styles: CSS.Properties = {
    backgroundColor: 'red',
    position: 'absolute',
    right: 0,
    bottom: '2rem',
    padding: '0.5rem',
    fontFamily: 'sans-serif',
    fontSize: '1.5rem',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
  };

export default class StyleInTSX extends Component {
  render() {
    // áp dụng biến số style cho thẻ jsx bằng thuộc tính style
    return <div style={h1Styles}>hello</div>
  }
}