function createDom(id, text) {
  document.getElementById(id).innerText = text;
}

const postUrl = "https://jsonplaceholder.typicode.com/posts";
const usersUrl = "https://jsonplaceholder.typicode.com/users";
const commentsUrl = "https://jsonplaceholder.typicode.com/comments";

axios
  .get(postUrl)
  .then(function (response) {
    // handle success
    console.log(response);
    createDom("postCount", `posts count: ${response.data.length}`);
    return axios
      .get(usersUrl)
      .then(function (response) {
        // handle success
        console.log(response);
        createDom("usersCount", `users count: ${response.data.length}`);
        return axios
          .get(commentsUrl)
          .then(function (response) {
            // handle success
            console.log(response);
            createDom(
              "commentsCount",
              `comments count: ${response.data.length}`
            );
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
