//Base
//Extracting Components 
function Comment(props) {
    return (
        <div className="Comment">

            <div className="UserInfo">
                <img className="Avatar"
                src={props.author.avatarUrl}
                alt={props.author.name}
                />
                <div className="UserInfo-name">
                {props.author.name}
                </div>
            </div>

            <div className="Comment-text">
                {props.text}
            </div>

            <div className="Comment-date">
                {formatDate(props.date)}
            </div>

        </div>
    );
}

//Composing component Comment()
//Composing have props
//author    avatarUrl,name
//text
//date

//1
//Extract Avatar from above
function Avatar(props) {
    return (
      <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />  
      );
  }

function Comment(props) {
    return (
        <div className="Comment">
        <div className="UserInfo">
            <Avatar user={props.author} />        
            <div className="UserInfo-name">
                {props.author.name}
            </div>
        </div>
        <div className="Comment-text">
            {props.text}
        </div>
        <div className="Comment-date">
            {formatDate(props.date)}
        </div>
        </div>
    );
}

//2
//Extract UserInfo
function Avatar(props) {
    return (
      <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />  
      );
  }

function UserInfo(props) {
    return (
        <div className="UserInfo">      
            <Avatar user={props.user} />      
            <div className="UserInfo-name">        
                {props.user.name}      
            </div>    
        </div>  
      );
  }

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />      
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}