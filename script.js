let input = "";
let total = 0;
let arrayOfInputs = [];

const number = (num) => {
  input = input + num.toString();
  document.getElementById("userinput").value = input;
};

const doubleZero = () => {
  input = input + "00";
  document.getElementById("userinput").value = input;
};

const percentage = () => {
  if (input === '') return;
  input = (parseFloat(input) / 100).toString();
  document.getElementById("userinput").value = input;
}

const negative = () => {
  input = (parseFloat(input) * -1).toString();
  document.getElementById("userinput").value = input;
}
const clr = () => {
  input = "";
  total = 0;
  arrayOfInputs = [];
  document.getElementById("userinput").value = input;
  document.getElementById("result").innerText = "";
};

const operator = (sign) => {
  input = input + sign;
  document.getElementById("userinput").value = input;
};

const convertor = (input) => {
  let numberString = "";
  let operators = ["+", "-", "*", "/"];
  let x = 0;

  for (let item of input) {
    x++;
    if (operators.includes(item)) {
      arrayOfInputs.push(+numberString);
      numberString = "";
      arrayOfInputs.push(item);
    } else {
      numberString = numberString + item;
    }
    if (x == input.length) {
      arrayOfInputs.push(+numberString);
    }
  }
};

const calculate = () => {
  convertor(input);
  // arrayOfInputs.push(+numberString);

  //   document.getElementById("operations").innerText = " ";
  if (typeof arrayOfInputs[0] === "number") {
    total = arrayOfInputs[0];
  }
  arrayOfInputs.forEach((i, index) => {
    if (i === "+") {
      total = +total + +arrayOfInputs[index + 1];
    }
    if (i === "-") {
      total -= arrayOfInputs[index + 1];
    }
    if (i === "/") {
      total /= arrayOfInputs[index + 1];
    }
    if (i === "*") {
      total *= arrayOfInputs[index + 1];
    }
  });
  numberString = total;
  arrayOfInputs = [];

  document.getElementById("result").innerText = total.toLocaleString("en-US");
};

const equal = () => {
  calculate();
};

// case "percentage":
//         if( calculationArray.length == 0 ){
//               numberString/=100
//               calculate()
//           }
//           if( calculationArray.length > 0){
//                 const lastIndexItem = calculationArray[calculationArray.length-1]
//                 if(lastIndexItem === "+" ){
//                     calculate();
//                     numberString = total + total*numberString/100
//                     calculationArray = [total]
//                 }
//                 if( lastIndexItem === "-"){
//                     calculate();
//                     numberString = total + total*numberString/100
//                     calculationArray = [total]
//                 } if(lastIndexItem === "x" ){
//                     console.log(numberString)
//                     numberString=numberString/100
//                     calculate()
//                 }
//                 if( lastIndexItem === "÷"){
//                     numberString=numberString/100
//                     calculate()
//                 }
//           }
//     break;
