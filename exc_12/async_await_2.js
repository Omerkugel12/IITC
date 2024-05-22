const f1 = () => console.log("f1 called");
const f2 = () => console.log("f2 called");
const f3 = () => console.log("f3 called");

async function pause() {
  console.log(new Date());
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(f1());
    }, 3000);
  });
  const result1 = await promise1;
  console.log(result1);
  console.log(new Date());
  const promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(f2());
    }, 5000);
  });
  const result2 = await promise2;
  console.log(result2);
  console.log(new Date());
  const promise3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(f3());
    }, 7000);
  });
  const result3 = await promise3;
  console.log(result3);
  console.log(new Date());
}

pause();

// const f1 = () => console.log("f1 called");
// const f2 = () => console.log("f2 called");
// const f3 = () => console.log("f3 called");

// const delay = (ms) =>
//   new Promise((resolve, reject) => {
//     setTimeout(resolve, ms);
//   });

// async function executeFunction() {
//   console.log(new Date());
//   await delay(3000);
//   f1();
//   console.log(new Date());
//   await delay(5000);
//   f2();
//   console.log(new Date());
//   await delay(7000);
//   f3();
//   console.log(new Date());
// }

// executeFunction();
