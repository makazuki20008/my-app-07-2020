import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import DatBienVaoJSX from './Tutorial/DatBienVaoJSX';
// import FormLogin from './Tutorial/CacKieuTaoElement';
// import MainPageSlide from './MainPageSlide/MainPageSlide';
// import PTBac1 from './GiaiToan/PTBac1';
// import MusicIndex from './MusicWebsite/MusicIndex';
// import CodeGround from './CodeGround/codeground';
// import BenhVien from './BenhVien';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <BenhVien /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
