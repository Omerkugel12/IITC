const booksUrl = "http://localhost:8001/books";
const createFormElem = document.querySelector("#createBook");
const pStateElem = document.querySelector("#state");
const getAllBtn = document.querySelector("#getAll");
const tableElem = document.querySelector("table");
const deleteFormElem = document.querySelector("#deleteBook");
const updateFormElem = document.querySelector("#updateBook");

getAllBtn.addEventListener("click", () => {
  axios
    .get(booksUrl)
    .then((response) => {
      console.log(response.data);
      const books = response.data;
      for (let i = 0; i < books.length; i++) {
        tableElem.innerHTML += `<tr>
            <td>${books[i].id}</td>
            <td>${books[i].name}</td>
            <td>${books[i].author}</td>
            <td>${books[i].numPages}</td>
            </tr>`;
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

createFormElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const bodyFormData = new FormData(createFormElem);
  axios
    .post(booksUrl, bodyFormData, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      console.log(response.data);
      pStateElem.innerText = "success!";
    })
    .catch((error) => {
      console.log(error);
      pStateElem.innerText = "failure!";
    });
});

deleteFormElem.addEventListener("submit", (e) => {
  e.preventDefault();
  //   const bodyFormData = new FormData(deleteFormElem);
  const idToDelete = document.querySelector("#idToDeleteInput").value;
  axios
    .delete(`${booksUrl}/${idToDelete}`)
    .then((response) => {
      console.log(response);
      pStateElem.innerText = "success!";
    })
    .catch((error) => {
      console.log(error);
      pStateElem.innerText = "failure!";
    });
});

updateFormElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const idToUpdate = document.querySelector("#idToUpdateInput").value;
  const nameToupdate = document.querySelector("#nameToUpdateInput").value;
  const authorToupdate = document.querySelector("#authorToUpdateInput").value;
  const numPagesToUpdate = document.querySelector(
    "#numPagestoUpdateInput"
  ).value;

  const body = {
    name: nameToupdate,
    author: authorToupdate,
    numPages: numPagesToUpdate,
  };

  axios
    .patch(`${booksUrl}/${idToUpdate}`, body)
    .then((response) => {
      console.log(response);
      pStateElem.innerText = "success!";
    })
    .catch((error) => {
      console.log(error);
      pStateElem.innerText = "failure!";
    });
});
