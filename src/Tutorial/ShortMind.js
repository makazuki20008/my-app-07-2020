5
componentDidMount() {  }
componentWillUnmount() {  }

6 Handling Event
function handleClick(e) {    e.preventDefault();    console.log('The link was clicked.');  }

7 Conditional rendering
if (isLoggedIn) {      
    button = <LogoutButton onClick={this.handleLogoutClick} />;    
    } else {      
    button = <LoginButton onClick={this.handleLoginClick} />;    
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />        
        {button}      
    </div>
    )

//Inline If with Logical && Operator 
    <div>
      <h1>Hello!</h1>
      {
      unreadMessages.length > 0 &&        
        <h2>          
          You have {unreadMessages.length} unread messages.        
        </h2>      
        }    
    </div>

//Inline If-Else with Conditional Operator
<div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.    
</div>

//Preventing Component from Rendering
function WarningBanner(props) {
    if (!props.warn) {    return null;  }

<WarningBanner warn={this.state.showWarning} />

8 Lists and Keys

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);console.log(doubled);

9 Forms
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>

10 Lifting State
class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
      this.state = {temperature: '', scale: 'c'};  }
  
    handleCelsiusChange(temperature) {
      this.setState({scale: 'c', temperature});  }
  
    handleFahrenheitChange(temperature) {
      this.setState({scale: 'f', temperature});  }
  
    render() {
      const scale = this.state.scale;    const temperature = this.state.temperature;    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
      return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}          
                onTemperatureChange={this.handleCelsiusChange} />        
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}          
                onTemperatureChange={this.handleFahrenheitChange} />        
            <BoilingVerdict
            celsius={parseFloat(celsius)} />      
        </div>
      );
    }
  }

  //input change when change diffirent input
  //input1: 3
  //input2: auto change then 7

  //input1: auto change then 3
  //input2: 7

11 Composition vs Inheritance

//function
<SplitPane>
    props.left;
    props.right;
</SplitPane>

fun Contacts()
fun Chat()

//using function
<SplitPane
      left={
        <Contacts />      }
      right={
        <Chat />      } />





//function
<FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}    
</FancyBorder>

//using function
<FancyBorder title="a" message="abc">hello world</FancyBorder> => "hello word" is props.children

12 Thinking in React
