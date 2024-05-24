function getrandomnum(min, max) {
  min = Math.floor(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputer() {
  let computer = getrandomnum(1, 8);
  let x = null;
  if (computer <= 3) {
    x = "rock";
  } else if (computer >= 4 && computer <= 6) {
    x = "paper";
  } else {
    x = "scissors";
  }
  return x;
}

function getuser() {
  let z = prompt("please enter rock or paper or scissors");
  let y = z.toLowerCase();

  return y;
}

let compinp = getComputer();
let userinp = getuser();
if (compinp == "rock") {
  if (userinp == "rock") {
    console.log("Tie!!");
  } else if (userinp == "paper") {
    console.log("User wins!!");
  } else {
    console.log("Computer wins!!");
  }
} else if (compinp == "paper") {
  if (userinp == "rock") {
    console.log("Computer wins!!");
  } else if (userinp == "paper") {
    console.log("Tie!!");
  } else {
    console.log("User wins!!");
  }
} else if (compinp == "scissors") {
  if (userinp == "rock") {
    console.log("user wins!!");
  } else if (userinp == "paper") {
    console.log("Computer wins!!");
  } else {
    console.log("Tie!!");
  }
}
