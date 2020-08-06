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
} from "react-router-dom"; // core is react-router
import Music from "./Music/Music";

// non checking
// import Pemain from './pages/Pemain/'; then like import Pemain from './pages/Pemain/pemain;
// import Pemain from './pages/Pemain/'; then like import Pemain from './pages/Pemain/pemain.js;
// import Pemain from './pages/Pemain/'; then like import Pemain from './pages/Pemain/index.js;

import ChinaMusic from "./Music/ChinaMusic/ChinaMusic";
import './App.css';
import PTBac1 from './GiaiToan/PTBac1';
import KpopMusicBank from './Music/KpopMusicBank/KpopMusicBank';
import HtmlColorName from './temp/HtmlColorName/HtmlColorName';
import ButtonInReactPage from "./temp/ButtonClick1";
import ButtonInReactPage2 from "./temp/ButtonClick2";
import ButtonInReactPage3 from "./temp/ButtonClick3";
import HelloBinhAn from './temp/Tutorial/Baitap/ReactJS';
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
import BasicPlayer from './temp/BasicPlayer';
import Twitter from './Twitter/twitter';
import Table from './temp/reactjso/functionprops';
import MainAuthorPage from './temp/reactjso/funpropsauthor';
import StyleInsideInJSX from './temp/StyleInsideInJSX';
import GiaiPTBac1Cach2 from './GiaiToan/PTBac1.2';
import StateInClass from "./temp/StateInClass";
import GirlImages from "./ImageStorage/YoungGirl";
import FoodPage from "./temp/ElementWithPropsVariable";
import UploadFile from "./temp/UploadFile/uploadFile";
import MoneyCaculator from "./QLTienGiaDinh/moneycaculator";
import NameForm from "./temp/ControllerComponent";
import GetInput from "./temp/GetValueFromInputForm";
import FirebaseReactJS from './temp/FirebaseReactJS/0.FirebaseReactJS';
import QueryObject from './temp/QueryJavascriptObject';
import GetAttributeEvent from './temp/GetAttributeValueWithEventTarget';
import JsonWebToken from './temp/jsonwebtoken/jwt.js';
//import ReactJSSocketIO from './temp/Socket.io/ReactjsSocketIO';
import ReactJSRedux from './temp/Redux/ReactJSredux/index';
import VariableElementWithProps from './temp/VariableElementWithProps';
import ReactJSFrament from './temp/ReactJSFrament';
import MElen from './temp/PropsInElementVar';
import NameOfElement from './temp/NameOfVariableElement';
import ReactJSRedux2 from './temp/Redux/ReactJSredux2/index';
import RouterInRouter from './temp/RouterInRouter';
import ImportImageOnStatic from './temp/ImportImageOnStatic';
import ClickHandleElement from './temp/VariableIsFunctionVariableIsElement';
import SelectInReactJS from './temp/SelectInReactJS';
import DoubleExclamation from './temp/DoubleExclamationInReactjs';
import CDUProperties from './temp/ComponentDidUpdate';
import CUMPropertiesIndex from './temp/ComponentUnmountIndex';
import IndexSession from './temp/Session/Index';
import PrintPage from './temp/PrintPages';
import ReactJSMySQL from './temp/ReactJSMySQL';
import DataToProps from './temp/DataToPropsChild';
import ThenWhenGetData from './temp/UsingThenWhenGetData';
import DropZone from './temp/DropFile';
import ErrorWhenUsingCode from './temp/ErrorWhenUsingCodeInDiv';
import CSSWithJavascript from './temp/CssWithJavascriptIndex';
import ForwardingRefs from './temp/ForwardingRefsToDOM';
import EffectStyleByJavascript from './temp/JavascriptEffectStyleComponent';
import HOCViewer from './temp/HigherOrderComponent';
import RefsInReactJs from './temp/RefsInReactJs';
import NotepadReactJS from './temp/NotepadReactJS';
import ReactJSChart from './temp/ReactJSChart';

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
              <li class="nav-item">
                <Link class="nav-link" to="/twitter">Twitter</Link>
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
          <Route path="/reactjschart">
            <ReactJSChart/>
          </Route>
		      <Route path="/notepadreactjs">
            <NotepadReactJS/>
          </Route>
          <Route path="/refsinreactjs">
            <RefsInReactJs/>
          </Route>
          <Route path="/higherordercomponent">
            <HOCViewer/>
          </Route>
          <Route path="/javascripteffectstyle">
            <EffectStyleByJavascript/>
          </Route>
          <Route path="/forwardingref">
            <ForwardingRefs/>
          </Route>
          <Route path="/csswithjavascript">
            <CSSWithJavascript/>
          </Route>
          <Route path="/errorwhenusingcodeinrender">
            <ErrorWhenUsingCode/>
          </Route>
          <Route path="/dropzone">
            <DropZone/>
          </Route>
          <Route path="/thenwhengetdata">
            <ThenWhenGetData/>
          </Route>
          <Route path="/datatoprops">
            <DataToProps/>
          </Route>
          <Route path="/reactjsmysql">
            <ReactJSMySQL/>
          </Route>
          <Route path="/printpage">
            <PrintPage/>
          </Route>
          <Route path="/sessionwithvar">
            <IndexSession/>
          </Route>
          <Route path="/reactjsunmount">
            <CUMPropertiesIndex/>
          </Route>
          <Route path="/reactjsdidupdate">
            <CDUProperties/>
          </Route>
          <Route path="/doubleexclamation">
            <DoubleExclamation/>
          </Route>
          <Route path="/selectinreactjs">
            <SelectInReactJS/>
          </Route>
          <Route path="/vifvie">
            <ClickHandleElement/>
          </Route>
          <Route path="/imagestatic">
            <ImportImageOnStatic/>
          </Route>
          <Route path="/routerinrouter">
            <RouterInRouter/>
          </Route>
          <Route path="/reactjsredux2">
            <ReactJSRedux2/>
          </Route>
          <Route path="/nameofelement">
            <NameOfElement/>
          </Route>
          <Route path="/propvar">
            <MElen/>
          </Route>
          <Route path="/frament">
            <ReactJSFrament />
          </Route>
          <Route path="/vwp">
            <VariableElementWithProps />
          </Route>
          <Route path="/reactjsredux">
            <ReactJSRedux />
          </Route>
          <Route path="/socketio">
            {/* <ReactJSSocketIO /> */}
          </Route>
          <Route path="/jsonwebtoken">
            <JsonWebToken />
          </Route>
          <Route path="/eventtarget">
            <GetAttributeEvent />
          </Route>
          <Route path="/queryobject">
            <QueryObject />
          </Route>
          <Route path="/firebase">
            <FirebaseReactJS />
          </Route>
          <Route path="/getinput">
            <GetInput />
          </Route>
          <Route path="/controllercomponent">
            <NameForm />
          </Route>
          <Route path="/moneycaculator">
            <MoneyCaculator />
          </Route>
          <Route path="/uploadfile">
            <UploadFile />
          </Route>
          <Route path="/elementprops">
            <FoodPage />
          </Route>
          <Route path="/imagestorage">
            <ImageStorage />
          </Route>
          <Route path="/girlimage">
            <GirlImages />
          </Route>
          <Route path="/stateinclass">
            <StateInClass />
          </Route>
          <Route path="/styleinsideinjsx">
            <StyleInsideInJSX />
          </Route>
          <Route path="/authorpage">
            <MainAuthorPage />
          </Route>
          <Route path="/table">
            <Table />
          </Route>
          <Route path="/twitter">
            <Twitter />
          </Route>
          <Route path="/temp">
            <Temp />
          </Route>
          <Route path="/basicplayer">
            <BasicPlayer />
          </Route>
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
            <HelloBinhAn />
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
          <Route path="/ptBac12">
            <GiaiPTBac1Cach2 />
          </Route>
          <Route path="/kpopmusicbank">
            <KpopMusicBank />
          </Route>
          <Route path="/chinamusic">
            <ChinaMusic />
          </Route>
          <Route path="/about" component={About}/>
          {/* up is use component={About} and close tag '/' same below
              <Route path="/about"> 
                  <About /> 
              </Route> 
          */}
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
      <Link to="/about">About</Link><br/>
      <Link to="/user">User</Link><br/>
      <Link to="/music">Music</Link><br/>
      <Link to="/buttoninreactjs">Button in reactjs</Link><br/>
      <Link to="/buttoninreactjs2">Button in reactjs 2</Link><br/>
      <Link to="/buttoninreactjs3">Button player music in reactjs 3</Link><br/>
      <Link to="/imagestorage">Image Storage</Link><br/>
      <Link to="/baitappage">Bai tap</Link><br/>
      <Link to="/uploadfile">Upload File</Link><br/>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function ImageStorage() {
  return (
    <div>
      <Link to="/girlimage">Girl images</Link>
    </div>
  )
}

function BaiTapPage() {
  return (
    <div>
      <Link to="/baitap">Hello</Link><br/>
      <Link to="/ptBac1">Giải phương trình bậc 1</Link><br/>
      <Link to="/ptBac12">Giải phương trình bậc 1.2</Link><br/>
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
      <Link to="/basicplayer">Basic Player</Link><br />
      <Link to="/temp">Temp</Link><br />
      <Link to="/table">&lt;Candy name=&#123;Limte&#125;&gt;</Link><br />
      <Link to="/authorpage">&lt;Author data=&#123;Andy&#125;&gt;</Link><br />
      <Link to="/styleinsideinjsx">&lt;div style=&#123;&#123; backgroundColor: 'red', width: 100, height: 100 &#125;&#125; /&gt;</Link><br />
      <Link to="/stateinclass">State In Class ReactJS</Link><br/>
      <Link to="/elementprops">Variable Props Declare</Link><br/>
      <Link to="/controllercomponent">Compornent Input and Submit</Link><br/>
      <Link to="/getinput">Get Value Input on Class</Link><br/>
      <Link to="/firebase">Firebase ReactJS</Link><br/>
      <Link to="/queryobject">Query object</Link><br/>
      <Link to="/eventtarget">Event target</Link><br/>
      <Link to="/jsonwebtoken">Jsonwebtoken</Link><br />
      <Link to="/socketio">ReactJS Socket.io</Link><br />
      <Link to="/reactjsredux">React redux main child</Link><br />
      <Link to="/reactjsredux2">React redux main child 2</Link><br />
      <Link to="/vwp">Variable element with props</Link><br />
      <Link to="/frament">ReactJS Frament</Link><br/>
      <Link to="/propvar">Prop in element make by var</Link><br/>
      <Link to="/nameofelement">Name of variable element</Link><br/>
      <Link to="/sessionindex">Session in reactjs</Link><br/>
      <Link to="/routerinrouter">Router in router</Link><br/>
      <Link to="/imagestatic">Import image src on static</Link><br/>
      <Link to="/vifvie">Variale is function variable is element</Link><br/>
      <Link to="/selectinreactjs">Select in reactjs</Link><br/>
      <Link to="/doubleexclamation">Double exclamation</Link><br/>
      <Link to="/reactjsdidupdate">Properties ComponentDidUpdate</Link><br/>
      <Link to="/reactjsunmount">Properties ComponentUnmount</Link><br/>
      <Link to="/sessionwithvar">Session with variable</Link><br/>
      <Link to="/printpage">Print in reactjs</Link><br/>
      <Link to="/reactjsmysql">ReactJS MySQL</Link><br/>
      <Link to="/datatoprops">Data to props</Link><br/>
      <Link to="/thenwhengetdata">Using then when get data</Link><br/>
      <Link to="/dropzone">Drop zone</Link><br/>
      <Link to="/errorwhenusingcodeinrender">Error when using code in render</Link><br/>
      <Link to="/csswithjavascript">Css with javascript</Link><br/>
      <Link to="/forwardingref">Forwarding Ref to DOM Component</Link><br/>
      <Link to="/javascripteffectstyle">Javascript effect style</Link><br/>
      <Link to="/higherordercomponent">Higher Order Component</Link><br/>
      <Link to="/refsinreactjs">Refs in ReactJS</Link><br/>
      <Link to="/reactjschart">ReactJS Chart</Link><br/>
      <Link to="/routerinrouter">Router in router</Link><br/>
      <Link to="/routerinrouter">Router in router</Link><br/>
      <Link to="/routerinrouter">Router in router</Link><br/>
      <Link to="/routerinrouter">Router in router</Link><br/>
      <Link to="/routerinrouter">Router in router</Link><br/>
      <Link to="/routerinrouter">Router in router</Link><br/>
      <Link to="/routerinrouter">Router in router</Link><br/>
      <Link to="/routerinrouter">Router in router</Link><br/>
      <Link to="/routerinrouter">Router in router</Link><br/>
      <Link to="/routerinrouter">Router in router</Link><br/>
      
    </div>
  )
}

function Temp() {
  return(
    <div>
    </div>
  )
}