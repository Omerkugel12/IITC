// // Write a JavaScript
// function getUser
// that returns
// a promise
// which resolves
// to a user object
// { id: 1, name: "John Doe" }
// after a 1-second delay.
// Then,
// demonstrate promise chaining
// by first logging
// the resolved user object,
// and subsequently
// logging a message
// that includes the user's name.

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe" });
    }, 1000);
  });
}

getUser()
  .then((user) => {
    console.log(user);
    return user;
  })
  .then((user) => {
    console.log(user.name);
  });
