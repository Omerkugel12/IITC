axios.get('https://jsonplaceholder.typicode.com/comments')
  .then(function (response) {
    setTimeout(()=>{
      // handle success
      console.log(response);
      const dataLength = JSON.parse(response.data.length)
      pElem.textContent = `number of comments: ${dataLength}`
  
      const tbody = document.querySelector('tbody')
      response.data.forEach(i => {
          const row = document.createElement('tr')
              row.innerHTML = `
              <td>${i.body}</td>
              <td>${i.email}</td>
              <td>${i.id}</td>
              <td>${i.name}</td>
              <td>${i.postId}</td>
              `
              tbody.appendChild(row)
              tableElem.style.display = 'block'
              loaderElem.style.display = 'none'
          });},3000)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  const pElem = document.querySelector('.number')
  console.log(pElem);

  const loaderElem = document.querySelector('.loader')

  const tableElem = document.querySelector('table')
  tableElem.style.display = 'none'
