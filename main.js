let inputValueArea = document.getElementById("inputBox")
let clearBtn = document.getElementById("clearBtn")
let keyValue = document.getElementsByClassName("box")
let sumBtn = document.getElementById("sum");


clearBtn.addEventListener("click", inputValueClear);

function inputValueClear() {
  inputValueArea.value = "";
}

for (let i = 0; i < keyValue.length; i++) {
  keyValue[i].addEventListener("click", function() {
    inputValueArea.value += keyValue[i].value
  });
}

sumBtn.addEventListener("click", sumValue)

function sumValue() {
  inputValueArea.value = eval(inputValueArea.value);
}




