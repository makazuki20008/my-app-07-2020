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
        <nav>
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
        </nav>

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
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}