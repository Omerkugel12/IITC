const resolveHandler = (val) =>
  setTimeout(function () {
    console.log(val);
    elemP.textContent = val;
  }, 2000);
function fetchData() {
  const promise = new Promise((resolve, reject) => {
    resolve("Data Fetched");
  });
  return promise;
}

const elemP = document.createElement("p");
document.body.appendChild(elemP);

fetchData().then(resolveHandler);
