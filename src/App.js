// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Music from "./Music/Music";
import ChinaMusic from "./Music/ChinaMusic/ChinaMusic";
import './App.css';
import PTBac1 from './GiaiToan/PTBac1';

export default function App() {
  return (
    <Router>
      <div>
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <Link class="navbar-brand" to="/">Bình An Application</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to="/" class="nav-link">Trang chủ <span class="sr-only">(current)</span></Link>
              </li>
              <li class="nav-item">
                {/* <Link to="/chinamusic">ChinaMusic</Link> */}
                <Link class="nav-link" to="/chinamusic">ChinaMusic</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
            </ul>
            <span class="navbar-text">
              Navbar text with an inline element
            </span>
          </div>
        </nav>        

        {/* <nav>
          <ul class="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tutorial">Tutorial</Link>
            </li>
            <li>
              <Link to="/ptBac1">Phuong trinh ax + b</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/music">Music</Link>
            </li>
            <li>
              <Link to="/chinamusic">ChinaMusic</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/music">
            <Music />
          </Route>
          <Route path="/tutorial">
          </Route>
          <Route path="/ptBac1">
            <PTBac1 />
          </Route>
          <Route path="/chinamusic">
            <ChinaMusic />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <div class="footer">
        <ul><li>Binh An @2020</li></ul>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Link to="/ptBac1">Giải phương trình bậc 1</Link><br/>
      <Link to="/about">About</Link><br/>
      <Link to="/user">User</Link><br/>
      <Link to="/music">Music</Link><br/>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}