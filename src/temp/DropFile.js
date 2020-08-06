


// function Dropzone() {
//   const onDrop = useCallback(acceptedFiles => {
//     // Do something with the files
//     console.log(acceptedFiles)
//   }, [])
//   const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
 
//   const changeHandler = (event) => {
//     this.setState({
//         selectedFile: event.target.files[0],
//         loaded: 0,
//       });
//   }
//   const clickHandler = () => {
//     const data = new FormData()
//     data.append('file', this.state.selectedFile)
//     axios.post("http://localhost:9000/upload", data, { 
//        // receive two    parameter endpoint url ,form data
//    }); // di chuyển data đến trang upload đã tạo
//    alert("Đã thực hiện việc upload!");
//   }

//   return (
//     <div {...getRootProps()}>
//       <input {...getInputProps()} onChange={changeHandler}/>
//       {
//         isDragActive ?
//           <p>Drop the files here ...</p> :
//           <p>Drag 'n' drop some files here, or click to select files</p>
//       }
//       <button onClick={clickHandler}>Upload</button>
//     </div>
//   )
// }

import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import axios from 'axios';

function Dropzone() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files

    axios.post("http://localhost:9000/upload", acceptedFiles, { 
       // receive two    parameter endpoint url ,form data
   }); // di chuyển data đến trang upload đã tạo
   alert("Đã thực hiện việc upload!");

  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}

export default Dropzone;