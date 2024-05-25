const booksUrl = "http://localhost:8001/books";
let pageNum = 0;

const getBooksBtn = document.querySelector("button");
getBooksBtn.addEventListener("click", () => {
  const tableElem = document.querySelector("table");
  pageNum++;
  let url = `${booksUrl}?_page=${pageNum}`;
  axios
    .get(url)
    .then((response) => {
      console.log(response);
      const resourceInPage = response.data.data;
      tableElem.innerHTML = "";
      tableElem.innerHTML = `<thead>
      <td>ID</td>
      <td>NAME</td>
      <td>AUTHOR</td>
      <td>NUMBER OF PAGES</td>
      </thead>`;
      for (let i = 0; i < resourceInPage.length; i++) {
        tableElem.innerHTML += `
        <tr>
      <td>${resourceInPage[i].id}</td>
      <td>${resourceInPage[i].name}</td>
      <td>${resourceInPage[i].author}</td>
      <td>${resourceInPage[i].numPages}</td>
      </tr>`;
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
