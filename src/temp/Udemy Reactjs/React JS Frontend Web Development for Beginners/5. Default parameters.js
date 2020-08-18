function welcome(user, message) {
    alert(`Hello ${user}, ${message}`);
}

function welcomeWithDefaultParameter(user = 'Mystery person', message = 'Goodday') {
    alert(`Hello ${user}, ${message}`);
}

welcome();
welcomeWithDefaultParameter();