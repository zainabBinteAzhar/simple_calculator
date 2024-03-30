import inquirer from "inquirer";
console.log("\nCommand-Line Calculator\n");
var choice, num1, num2, result, operator;
do {
    console.log("**********MENU**********\n");
    console.log("Enter 1: to perform calculations\nEnter 0: to exit");
    const userInput = await inquirer.prompt([
        {
            name: "choice",
            message: "Enter your choice: ",
            type: "input",
        }
    ]);
    choice = parseInt(userInput.choice);
    if (choice === 1) {
        console.log("\n*****Perform Calculation*****\n");
        const number1 = await inquirer.prompt([
            {
                name: "num1",
                message: "Enter 1st number: ",
                type: "input",
            }
        ]);
        num1 = parseInt(number1.num1);
        const number2 = await inquirer.prompt([
            {
                name: "num2",
                message: "Enter 2nd number: ",
                type: "input",
            }
        ]);
        num2 = parseInt(number2.num2);
        const oper = await inquirer.prompt([
            {
                name: "operator",
                message: "Enter operator ( + , - , * , / ): ",
                type: "input",
            }
        ]);
        operator = oper.operator;
        switch (operator) {
            case "+":
                result = num1 + num2;
                console.log("\n" + num1 + " + " + num2 + " = " + result + "\n");
                break;
            case "-":
                result = num1 - num2;
                console.log("\n" + num1 + " - " + num2 + " = " + result + "\n");
                break;
            case "*":
                result = num1 * num2;
                console.log("\n" + num1 + " * " + num2 + " = " + result + "\n");
                break;
            case "/":
                result = num1 / num2;
                console.log("\n" + num1 + " / " + num2 + " = " + result + "\n");
                break;
            default:
                console.log("\nERROR : no such operator exists\n");
                break;
        }
    }
    else if (choice === 0) {
        console.log("\n**********EXIT**********\n");
    }
    else {
        console.log("\nERROR: SOMETHING WRONG ENTERED\n");
    }
} while (choice != 0);
