function Hello() {
  console.log("Hello");
  Node();
}
var hello_arrow = () => {
  console.log("Hello");
  (() => {
    console.log("Node");
  })();
}

function Node() {
  console.log("Node");
}

// Hello();
hello_arrow();