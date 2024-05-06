      function sortArr(arr) {
        let sorted = [];
        for (let i = 0; i < arr.length; i++) {
          for(let j = 0;j < sorted.length;j++){
            if(arr[i]<sorted[j]){
              sorted.splice(j,0,arr[i])
              break
            }
          }
          if(!sorted.includes(arr[i])){
            sorted.push(arr[i])
          }
        }return sorted
      }
      const numbers = [5, 4, 3, 7, 534, 3];
      const numbers1 = [54635,5435,342,32,2]
      console.log(sortArr(numbers));
      console.log(sortArr(numbers1));


