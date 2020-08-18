import React, { Component } from 'react';
import axios from 'axios';

class SQLReactjs2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: []
        }
    }

    componentDidMount() {
      axios.get('http://localhost:8081/api/customers')
           .then(res => {
              const customers = res.data;
              this.setState({ customers: customers });
            })
           .catch(error => console.log(error));
    };
  
    render() {
      return(
        <ul>
          {this.state.customers.map(item => (
            <li key={item.id}>
              <b>Tên: {item.firstname}&nbsp;{item.lastname}</b>
            </li>
          ))}
        </ul>
      )
    }
}

export default SQLReactjs2;