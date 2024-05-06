let numbers = [5, 4, 3, 7, 534, 3];
      function sortArr(arr) {
        let sorted = [];
        for (let i = 0; i < arr.length; i++) {
          let inserted = false
          for(let j = 0;j < sorted.length;j++){
            if(arr[i]>sorted[j]){
              sorted.splice(j,0,arr[i])
              inserted = true
              break
            }
          }
          if(!inserted){
            sorted.push(arr[i])
          }
        }return sorted.reverse() 
      }


      console.log(sortArr(numbers));