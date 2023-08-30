const sayNode = () => {
  console.log("Node");
}

const oldObject = {
  sayJs : function() {
    console.log("JS");
  },
  sayNode,
};
oldObject.sayJs();
console.log(oldObject);

let value = 20;
let value1;
let value2;
let result = value1 ?? value;
console.log(result);

result = value2 || value;
let obj = {
  sub: {
    getLog() {
      console.log("Get Log");
    }
  }
};
let obj1 = obj;
obj1.sub = null;
// if (obj1.sub != null) 
console.log(obj1.sub?.getLog());

