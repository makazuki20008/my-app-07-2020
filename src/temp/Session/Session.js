var Session = (function() {
  var username = "";

  var getUsername = function() {
    return username;    // Or pull this from cookie/localStorage
  };

  var setUsername = function(_username) {
    username = _username;     
    // Also set this in cookie/localStorage
  };

  return {
    getUsername: getUsername,
    setUsername: setUsername
  }

})();

export default Session;