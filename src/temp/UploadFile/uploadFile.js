// Mosh Hamedani
// https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/

import React from 'react';
import axios from 'axios';

class UploadFile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { slectedFile: null }
    };

    // onClickHandler = () => {
    //     const data = new FormData();
    //     data.append('file', this.state.selectedFile);
    //     axios.post("http://localhost:8000/upload", data);
    // };

    onChangeHandler=event=>{
        this.setState({
          selectedFile: event.target.files[0],
          loaded: 0,
        });
    };

    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post("http://localhost:8000/upload", data, { 
           // receive two    parameter endpoint url ,form data
       }); // di chuyển data đến trang upload đã tạo
       alert("Đã thực hiện việc upload!");
    }

    render() {
        return(
            <div class="contain">
            <div class="row">
            <div class="col-md"></div>
            <div class="col-md" style={{ marginTop: 31 }}>
                <form action="" method="post">
                    <input type="file" name="file" onChange={this.onChangeHandler}/>
                    <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler} style={{ width: 90, marginTop: 2 }}>Upload</button> 
                </form>
            </div>
            <div class="col-md"></div>
            </div>
            </div>
        );
    };
}

export default UploadFile;