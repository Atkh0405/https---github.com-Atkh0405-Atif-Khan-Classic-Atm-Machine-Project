import inquirer from "inquirer";

let myBalance = 20000; // Dollar
let myPin = 2468;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin",
    type: "number",
  }
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct pin code!!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "fast cash", "check balance"]
    }
  ]);

  console.log(operationAns);

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      }
    ]);
    if (amountAns.amount > myBalance) {
      console.log("Insufficient balance");
    } else {
      myBalance -= amountAns.amount;
      console.log(`Your remaining balance is ${myBalance}`);
    }
  }

  if (operationAns.operation === "fast cash") {
    let fast = await inquirer.prompt([
      {
        name: "fast",
        message: "Select the amount which you want to withdraw",
        type: "list",
        choices: [5000, 10000, 15000, 20000]
      }
    ]);
    myBalance -= fast.fast;
    console.log(`You have successfully withdrawn ${fast.fast}\nYour remaining balance is ${myBalance}`);
  } else if (operationAns.operation === "check balance") {
    console.log(`Your remaining balance is ${myBalance}`);
  }
} else {
  console.log("Incorrect pin number");
}