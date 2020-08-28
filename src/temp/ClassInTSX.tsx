import React, { Component } from 'react';

// kieu cua 1 state duoc khai bao ben ngoai
type NoticeProps = {
  msg: string
}

export default class ClassInTSX extends Component<NoticeProps> {
  static defaultProps = {
    msg: 'Hello everyone!'
  }

  render() {
    return <p>{ this.props.msg }</p>
  }
}

// const el = <ClassInJSX /> // Will compile in TS 3.0

// Đặc điểm của typescript
// function
// class
// variable
// interface





// thực thi và dữ liệu

// mỗi loại dữ liệu có kiểu riêng
// function nhận dữ liệu đầu vào ở ()
// class nhận dữ liệu đầu vào ở extends Component<dữ liệu>

// props
// state

// giao diện và xử lý