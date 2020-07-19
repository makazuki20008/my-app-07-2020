import React from 'react';

class ReventDefault extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            input: ''
        }
    }

    // inputHandle được gán ở onChange tag <input type="text"...
    // event trả về là một đối tượng tag input
    
    inputHandle = event => {
        this.setState({ input: event.target.value })
    }

    // Thao tác gặp reventDefault() thao tác không hành động
    // Ex: <input... -> nhập abc -> khi nhập abc 'd' -> 'd' là thao tác mà reventDefault() bắt được -> input chỉ hiển thị abc

    submitHandle = event => {
        event.reventDefault(); // Ngăn chặn
        console.log(this.state.input);
    }
    render() {
        return(
            <form onSubmit={ this.submitHandle }>
                <input type="text" value={ this.state.input } onChange={ this.inputHandle }/>
                <input type="submit" value="submit"/>
            </form>
        )
    }

    // event trả về là đối tượng mà tại đó method được gán
    // e.reventDefault() ngăn chặn tag html hoạt động (với e là đối tượng tag html)
}

export default ReventDefault;