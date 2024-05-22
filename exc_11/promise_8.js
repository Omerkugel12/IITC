const sumDiv = document.querySelector("#sum");
const postsUrl = "https://jsonplaceholder.typicode.com/posts";
const usersUrl = "https://jsonplaceholder.typicode.com/users";
const commentsUrl = "https://jsonplaceholder.typicode.com/comments";

const postsPromise = axios.get(postsUrl);
const usersPromise = axios.get(usersUrl);
const commentsPromise = axios.get(commentsUrl);

Promise.all([postsPromise, usersPromise, commentsPromise]).then(
  ([postsResponse, usersResponse, commentsResponse]) => {
    const posts = postsResponse.data;
    const users = usersResponse.data;
    const comments = commentsResponse.data;

    const total = posts.length + users.length + comments.length;
    sumDiv.innerHTML = `sum: ${total}`;
  }
);
