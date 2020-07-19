// Khắc phục lỗi:
// A component is changing a controlled input of type text to be uncontrolled. 
// Input elements should not switch from controlled to uncontrolled (or vice versa). 
// Decide between using a controlled or uncontrolled input element for the lifetime of the component.

import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault(); // event là dữ liệu từ form, ở đây có submit và value
    }
  
    // onSubmit là hành động khi input submit được ấn
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default NameForm;