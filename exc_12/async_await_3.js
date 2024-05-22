//promise_7 using Async/await

// const postsUrl = "https://jsonplaceholder.typicode.com/posts";
// const usersUrl = "https://jsonplaceholder.typicode.com/users";
// const commentsUrl = "https://jsonplaceholder.typicode.com/comments";

// const postsCount = document.querySelector(".postCount");
// const usersCount = document.querySelector(".usersCount");
// const commentsCount = document.querySelector(".commentsCount");

// async function getcounts() {
//   try {
//     const [postsResponse, usersResponse, commentsResponse] = await Promise.all([
//       axios.get(postsUrl),
//       axios.get(usersUrl),
//       axios.get(commentsUrl),
//     ]);

//     const postsDataCount = postsResponse.data.length;
//     const usersDataCount = usersResponse.data.length;
//     const commentsDataCount = commentsResponse.data.length;

//     postsCount.innerText = postsDataCount;
//     usersCount.innerText = usersDataCount;
//     commentsCount.innerText = commentsDataCount;
//   } catch (error) {
//     console.log(error);
//   }
// }

// getcounts();

//promise_8 using Async/await
const postsUrl = "https://jsonplaceholder.typicode.com/posts";
const usersUrl = "https://jsonplaceholder.typicode.com/users";
const commentsUrl = "https://jsonplaceholder.typicode.com/comments";

const pElemSum = document.querySelector("#sum");

async function computeSum() {
  const [postsResponse, usersResponse, commentsResponse] = await Promise.all([
    axios.get(postsUrl),
    axios.get(usersUrl),
    axios.get(commentsUrl),
  ]);
  console.log(
    Promise.all([
      axios.get(postsUrl),
      axios.get(usersUrl),
      axios.get(commentsUrl),
    ])
  );
  console.log(axios.get(postsUrl));
  const postsLength = postsResponse.data.length;
  const usersLength = usersResponse.data.length;
  const commentsLength = commentsResponse.data.length;

  pElemSum.innerText = postsLength + usersLength + commentsLength;
}

computeSum();
