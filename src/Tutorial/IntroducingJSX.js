import React from 'react';




function formatName(user) {
  return user.firstName + ' ' + user.lastName;
};

const user = {
  firstName: "An",
  lastName: "Le"
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

function BasicTag() {
  return (
    element
  );
};









export default BasicTag;