//element basic
const element = <div />;

//element with props
const element = <Welcome name="Sara" />;

///////////////////////////////////////////
//MAKE ELEMENT WITH PROPS
function Welcome(props) {  
    return <h1>Hello, {props.name}</h1>;
}
//-> element Welcome

const element = <Welcome name="Sara" />;
//-> Welcome have props name

ReactDOM.render(
  element,
  document.getElementById('root')
);
//-> print element to html