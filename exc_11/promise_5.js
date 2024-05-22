function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe" });
    }, 1000);
  });
}

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["post1", "post2"]);
    }, 2000);
  });
}

Promise.all([fetchPosts(), fetchUser()]).then((results) => {
  console.log(results);
});
