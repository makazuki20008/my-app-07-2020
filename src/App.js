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
import KpopMusicBank from './Music/KpopMusicBank/KpopMusicBank';
import HtmlColorName from './temp/HtmlColorName/HtmlColorName';
import ButtonInReactPage from "./temp/ButtonClick1";
import ButtonInReactPage2 from "./temp/ButtonClick2";
import ButtonInReactPage3 from "./temp/ButtonClick3";
import Baitap from './temp/Tutorial/Baitap/reactjs';
import FormatNameElement from './temp/Tutorial/Baitap/FormatName';
import Greeting from './temp/Tutorial/Baitap/ReturnWithExist';
import CreateElement from './temp/Tutorial/Baitap/CreateElement';
import MapReact from './temp/Tutorial/Baitap/MapReact';
import CharReference from './temp/CharacterEntitiesReferences';
import ShowListPhim from './temp/Tutorial/Baitap/ShowArrayWithFor';
import ShowArrayWithPure from './temp/Tutorial/Baitap/ShowArrayWithPureFunction';
import ExclamationReact from './temp/Tutorial/Baitap/ExclamationInViewReact';
import VariableWithoutVar from './temp/Tutorial/Baitap/VariableWithoutVar';
import MultiLine from './temp/Tutorial/Baitap/MultiLineInJavascript';
import SemicolonExample from './temp/Tutorial/Baitap/SemicolonDontNeed';
import ElementWithoutFunction from './temp/Tutorial/Baitap/ElementWitoutFunction';

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
                <Link class="nav-link" to="/kpopmusicbank">Kpop Music Bank</Link>
              </li>
            </ul>
            <span class="navbar-text">
              Tổng hợp kiến thức và tìm hiểu về ReactJS
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
          <Route path="/elementwithoutfunction">
            <ElementWithoutFunction />
          </Route>
          <Route path="/semicolonexample">
            <SemicolonExample />
          </Route>
          <Route path="/multiline">
            <MultiLine />
          </Route>
          <Route path="/variablewithoutvar">
            <VariableWithoutVar />
          </Route>
          <Route path="/exlamationreact">
            <ExclamationReact />
          </Route>
          <Route path="/showbyfor">
            <ShowListPhim />
          </Route>
          <Route path="/showbypure">
            <ShowArrayWithPure />
          </Route>
          <Route path="/characterentities">
            <CharReference />
          </Route>
          <Route path="/mapreact">
            <MapReact />
          </Route>
          <Route path="/baitappage">
            <BaiTapPage />
          </Route>
          <Route path="/createElement">
            <CreateElement />
          </Route>
          <Route path="/formatNameUser">
            <Greeting />
          </Route>
          <Route path="/formatName">
            <FormatNameElement />
          </Route>
          <Route path="/baitap">
            <Baitap />
          </Route>
          <Route path="/buttoninreactjs">
            <ButtonInReactPage />
          </Route>
          <Route path="/buttoninreactjs2">
            <ButtonInReactPage2 />
          </Route>
          <Route path="/buttoninreactjs3">
            <ButtonInReactPage3 />
          </Route>
          <Route path="/htmlcolorname">
            <HtmlColorName />
          </Route>
          <Route path="/music">
            <Music />
          </Route>
          <Route path="/tutorial">
          </Route>
          <Route path="/ptBac1">
            <PTBac1 />
          </Route>
          <Route path="/kpopmusicbank">
            <KpopMusicBank />
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
      <Link to="/htmlcolorname">Color Name</Link><br/>
      <Link to="/characterentities">Character in HTML</Link><br/>
      <Link to="/ptBac1">Giải phương trình bậc 1</Link><br/>
      <Link to="/about">About</Link><br/>
      <Link to="/user">User</Link><br/>
      <Link to="/music">Music</Link><br/>
      <Link to="/buttoninreactjs">Button in reactjs</Link><br/>
      <Link to="/buttoninreactjs2">Button in reactjs 2</Link><br/>
      <Link to="/buttoninreactjs3">Button player music in reactjs 3</Link><br/>
      <Link to="/baitappage">Bai tap</Link>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function BaiTapPage() {
  return (
    <div>
      <Link to="/baitap">Bai tap</Link><br/>
      <Link to="/formatname">function formatName(user) {}</Link><br/>
      <Link to="/formatnameuser">function Greeting(user) {}</Link><br/>
      <Link to="/createElement">React.createElement()</Link><br/>
      <Link to="/mapreact">numbers.map((number)= &#123;&lt;li&gt; &#123;number&#125; &lt;/li&gt;&#125; )</Link><br/>
      <Link to="/showbyfor">For show ListPhims</Link><br/>
      <Link to="/showbypure">Pure show ListPhims</Link><br/>
      <Link to="/exlamationreact">! in React</Link><br/>
      <Link to="/variablewithoutvar">without var () =&gt;</Link><br/>
      <Link to="/multiline">Multi line ` `</Link><br/>
      <Link to="/semicolonexample">Semicolon ;</Link><br/>
      <Link to="/elementwithoutfunction">const element = () =&gt; &#123; &#125;</Link><br/>
    </div>
  )
}
