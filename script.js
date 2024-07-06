const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", convert)

function convert() {
  let input = document.getElementById("number").value;
  let result = "";
  if (input == -1) {
      output.innerText = "Please enter a number greater than or equal to 1";
      return
  } else if (input >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999"
    return
  } else if (input == "") {
    output.innerText = "Please enter a valid number"
    return
  }

  const no1 = "I"
  const no5 = "V"
  const no10 = "X"
  const no50 = "L"
  const no100 = "C"
  const no500 = "D"
  const no1000 = "M"

console.log(input)

while (input >= 1000) {
  input -= 1000
  result += no1000
}

if (input >= 900 && input < 1000) {
  input -= 900
  result += no100 + no1000
}

while (input >= 500) {
  input -= 500
  result += no500
}

if (input >= 400 && input < 500) {
  input -= 400
  result += no100 + no500
}

while (input >= 100) {
  input -= 100
  result += no100
}

if (input >= 90 && input < 100) {
  input -= 90
  result += no10 + no100
}

while (input >= 50) {
  input -= 50
  result += no50
}

if (input >= 40 && input < 50) {
  input -= 40
  result += no10 + no50
}

while (input >= 10) {
  input -= 10
  result += no10
}

if (input == 9) {
  input -= 9
  result += no1 + no10
}

while (input >= 5) {
  input -= 5
  result += no5
}

if (input == 4) {
  input -= 4
  result += no1 + no5
}

while (input < 5 && input > 0) {
    result += no1
    input -= 1
}
  console.log(input)
  output.innerText = result;
}