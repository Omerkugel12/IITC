const urlUsers = "https://jsonplaceholder.typicode.com/users";
const urlPosts = "https://jsonplaceholder.typicode.com/posts";

axios
  .get(urlUsers)
  .then(function (response) {
    // handle success
    console.log(response);
    const usersArray = response.data;
    axios
      .get(urlPosts)
      .then(function (response) {
        // handle success
        console.log(response);
        const postsArray = response.data;
        const tableElem = document.querySelector("table");
        for (let i = 0; i < postsArray.length; i++) {
          const post = postsArray[i];
          tableElem.innerHTML += `<tr>
            <td>${usersArray[post.userId - 1].username}</td>
            <td>${postsArray[i].id}</td>
            <td>${postsArray[i].title}</td>
            <td>${postsArray[i].body}</td>
            </tr>`;
        }
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
