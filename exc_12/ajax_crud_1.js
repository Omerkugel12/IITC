const usersUrl = "http://localhost:8001/users";
const booksUrl = "http://localhost:8001/books";

const elemPAddState = document.querySelector("#addState");
const elemPDeleteState = document.querySelector("#deleteState");

//button roles to display all user data on a the DOM with a table element
const getAllBtn = document.querySelector("#getAll");
getAllBtn.addEventListener("click", () => {
  axios
    .get(usersUrl)
    .then((response) => {
      console.log(response.data);
      for (let i = 0; i < response.data.length; i++) {
        const tableElem = document.querySelector("table");
        tableElem.innerHTML += `<tr>
        <td>${response.data[i].id}</td>
        <td>${response.data[i].firstName}</td>
        <td>${response.data[i].lastName}</td>
        </tr>`;
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

//Form roles to create new user and append it to the json-server file
const addFormElem = document.querySelector("#addUser");
addFormElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputFirstName = document.querySelector("#addFirstName").value;
  const inputLastName = document.querySelector("#addLastName").value;
  const body = { firstName: inputFirstName, lastName: inputLastName };

  axios
    .post(usersUrl, body)
    .then((response) => {
      console.log(response);
      elemPAddState.innerText = "User was added succssesfuly";
    })
    .catch((error) => {
      console.log(error);
      elemPAddState.innerText = "Failure";
    });
});

//Form roles to delete user from json-server
const deleteFormElem = document.querySelector("#deleteUser");
deleteFormElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const deleteInput = document.querySelector("#delteUserInput").value;
  axios
    .delete(`${usersUrl}/${deleteInput}`)
    .then((response) => {
      console.log(response);
      elemPDeleteState.innerText = "User was deleted successfuly";
    })
    .catch((error) => {
      console.log(error);
      elemPDeleteState.innerText = "Failure";
    });
});

//Form roles to update user from json-server
const updateformElem = document.querySelector("#updateUser");
updateformElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const idInputElem = document.querySelector("#IdToUpdate").value;
  const firstNameToUpdateInputElem =
    document.querySelector("#firstNameToUpdate").value;
  const lastNameToUpdateInputElem =
    document.querySelector("#lastNameToUpdate").value;

  const body = {
    firstName: firstNameToUpdateInputElem,
    lastName: lastNameToUpdateInputElem,
  };
  axios
    .patch(`${usersUrl}/${idInputElem}`, body)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
});
