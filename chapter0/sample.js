let add = (num1, num2) => {
  return num1 + num2;
}
let sub = (num1, num2) => {
  return num1 - num2;
}
let mul = (num1, num2) => {
  return num1 * num2;
}
let div = (num1, num2) => {
  if (num2 == 0) return 0;
  return num1 / num2;
}

const onLoadData = () => {
  const result1 = document.createElement(`div`);
  result1.textContent = `add result ${add(10,20)}`;

  const result2 = document.createElement(`div`);
  result2.textContent = `sub result ${sub(10,20)}`;

  const resultData = document.getElementById(`results`);
  resultData.appendChild(result1);8
  resultData.appendChild(result2);

  // console.log("html page loaded");
  // let result = add(10, 20);
  // console.log('result : ', result);
  // result = sub(10, 20);
  // console.log('result : ', result);
  // result = mul(10, 20);
  // console.log('result : ', result);
  // result = div(10, 20);
  // console.log('result : ', result);
}

window.onload = onLoadData;
