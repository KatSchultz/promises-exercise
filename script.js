const apiPromise = fetch(
  "https://grandcircusco.github.io/demo-apis/donuts.json"
)
  .then((res) => res.json())
  .then((jsonData) => {
    //1. Log all data from the apiPromise
    console.log(jsonData.results);
    //2. Log just the count from the apiPromise
    console.log(jsonData.count);
    return jsonData;
  })
  .then(
    (countPromise) =>
      new Promise(function (resolve, reject) {
        console.log(countPromise.count);
        resolve(countPromise);
      })
  )
  .then();

apiPromise.then(
  (countPromise) =>
    new Promise(function (resolve, reject) {
      console.log(countPromise.count);
      resolve(countPromise);
    })
);

apiPromise.then(
  (top4Promise) =>
    new Promise(function (resolve, reject) {
      let first4 = top4Promise.results;
      let newArray = first4.slice(0, 4);
      console.log(newArray);
      resolve(top4Promise);
    })
);

apiPromise
  .then(
    (namesPromise) =>
      new Promise(function (resolve, reject) {
        let donutNameArray = [];
        namesPromise.results.forEach((element) => {
          donutNameArray.push(element.name);
          console.log(element.name);
        });
        resolve(namesPromise);
        return donutNameArray;
      })
  )
  .then(
    (capNamesPromise) =>
      new Promise(function (resolve, reject) {
        let nameArray = [];
        let capArray = [];
        let donutResults = capNamesPromise.results;
        donutResults.forEach((elem) => {
          console.log(elem.name);
          nameArray.push(elem.name);
        });
        nameArray.forEach((elem) => {
          capArray.push(elem.toUpperCase());
        });
        console.log(capArray);
        return capArray;
        //     capNamesPromise.results.forEach((element) => {
        //       capArray.push(element.toUpperCase());
        //     });
        //     console.log(capArray);
      })
  );

// console.log(capNamesPromise());
//   .then((response) => {
//     console.log(response.count);
//     return response;
//   })
//   .then((response) => {
//     let first4 = response.results;
//     let newArray = first4.slice(0, 4);
//     console.log(newArray);
//     return response;
//   })
//   .then((response) => {
//     let donutNameArray = [];
//     response.results.forEach((element) => {
//       donutNameArray.push(element.name);
//       console.log(element.name);
//     });
//     return donutNameArray;
//   })
//   .then((response) => {
//     let capArray = [];
//     response.forEach((element) => {
//       capArray.push(element.toUpperCase());
//     });
//     console.log(capArray);
//   });

// const countPromise = apiPromise.then((response) => {
//   console.log("countpromise", response);
// });

// const countPromise = ()

let badPromise = fetch("https://grandcircusco.github.io/demo-apis/wrong.json")
  .then((res) => res.json())
  .catch((error) => {
    console.log("FAILED", error);
  });

//ABOVE CODE GOOD.

// apiPromise.then((res) => res.json())
// .then((jsonData) => {

// }
//   .then((countPromise) => {});
// //   .then((countProm) => {
// //     console.log(jsonData.count);
// //   });

// // console.log(apiPromise);

// // const countPromise = apiPromise()
// //   .then((res) => res.json())
// //   .then((jsonData) => {
// //     return jsonData.count;
// //   });
// // console.log(countPromise);

// const promise2 = apiPromise
//   .then((res) => res.json())
//   .then((jsonData) => {
//     return jsonData.count;
//   });
// console.log(promise2);

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("done"), 2000);
//   //   resolve(123);
// });
// console.log(promise);

// promise.then(
//   (result) => alert(result),
//   (error) => alert(error)
// );

// function delay(ms) {
//   setTimeout(() => ms);
// }
// delay(3000).then(() => alert("runs after 3 seconds"));

// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000); // (*)
// })
//   .then(function (result) {
//     // (**)

//     alert(result); // 1
//     return result * 2;
//   })
//   .then(function (result) {
//     // (***)

//     alert(result); // 2
//     return result * 2;
//   })
//   .then(function (result) {
//     alert(result); // 4
//     return result * 2;
//   });
