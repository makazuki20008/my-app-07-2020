const greeting = <h1>Hello world!</h1>;

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
};

const user = {
    firstName: "An",
    lastName: "Le"
};

const element = <h1>Hello {formatName(user)}!</h1>

ReactDOM.render(
    element,
    document.getElementById('root')
);

function Greeting(user) {
    if (user) {
        return <h1>Hello {user.firstName + ' ' + user.lastName}!</h1>; }
    return <h1>Hello Stranger.</h1>;
};

const helloUser = (
    <div>{Greeting(user)}</div>
);

ReactDOM.render(
    helloUser,
    document.getElementById('root')
);

const element = <div tabIndex="0"></div>;
const element = <img src={user.avatarUrl}></img>