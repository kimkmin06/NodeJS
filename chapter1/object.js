const { response } = require("express");

const getData = (callbackFunc) => {
  let result = true;
  return new Promise((resolve, reject) => {
    if (result) resolve(result);
    else reject(result);
  })
  callbackFunc(result, callbackFunc);
};

const callbackFunc1 = (response) => {
  return new Promise((resolve, reject) => {
    if (result) resolve(result);
    else reject(result);
  })
} 

const callbackFunc2 = (response) => {
  console.log(response);
}

getData()
.then(response => callbackFunc1(response))
.then(response => callbackFunc2(response))
.catch((error) => {
  console.log(error);
});

async function getData_await() {
  try {
    let result = await getData();
    if (result) {
      console.log("sucess");
      callbackFunc2(result);
    }
  }
  catch {
    console.log("failed");
    console.log(error);
  }
  
};
getData_await();