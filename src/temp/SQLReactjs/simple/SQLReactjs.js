import React, { Component } from 'react';
import axios from 'axios';

class SQLReactjs extends Component {
  constructor (props) {
    super(props);
    this.state = {
      customers : []
    }
  };

  componentDidMount() {
    axios.get('http://localhost:4000/api/customer')
         .then(res => {
            const customers = res.data;
            this.setState({ customers: customers.customers });
          })
         .catch(error => console.log(error));
  };

  render() {
    return(
      <ul>
        {this.state.customers.map(item => (
          <li key={item.id}>
            <b>Tên: {item.name}</b>
            <div>Ngày sinh: {new Date(item.dob).toISOString().split('T')[0]}</div>
            <div>Giới tính: { item.gender?'Nam':'Nữ' }</div>
          </li>
        ))}
      </ul>
    )
  }
};

export default SQLReactjs;