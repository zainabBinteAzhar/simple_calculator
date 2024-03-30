#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import gradient from 'gradient-string';
import chalkanimation from 'chalk-animation';
import figlet from 'figlet';
//import { createSpinner } from "nanospinner";


const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function Title() {
  const rainbowTitle = chalkanimation.rainbow(
    "\nCommand-Line Calculator\n"
  );

  await sleep();
  rainbowTitle.stop();
}
await Title();

function Exit() {
    console.clear();
    const msg ="\nThankYou!\nPractise Again\n";
    figlet(msg,(_err,data)=>{
        console.log(gradient.pastel.multiline(data));
    });
  }

var choice:number,num1:number,num2:number,result:number,operator:string;
do
{
    console.log(chalk.bgYellowBright("**********MENU**********\n"));
    console.log(chalk.bgYellowBright("Enter 1: to perform calculations\nEnter 0: to exit"));
    const userInput = await inquirer.prompt([
        {
            name: "choice",
            message: "Enter your choice: ",
            type: "input",
        }
    ]);
    choice = parseInt(userInput.choice);

    if(choice===1)
    {
        console.log("\n*****Perform Calculation*****\n");
        const number1 =await inquirer.prompt([
            {
                name:"num1",
                message:"Enter 1st number: ",
                type:"input",
            }
        ]);
        num1 = parseInt(number1.num1);

        const number2 =await inquirer.prompt([
            {
                name:"num2",
                message:"Enter 2nd number: ",
                type:"input",
            }
        ]);
        num2=parseInt(number2.num2);

        const oper =await inquirer.prompt([
            {
                name:"operator",
                message:"Enter operator ( + , - , * , / ): ",
                type:"input",
            }
        ]);
        operator=oper.operator; 

        
        switch(operator)
        {
            case "+": result=num1+num2;
            console.log("\n"+num1+" + "+num2+" = "+result+"\n"); 
            break;
    
            case "-": result=num1-num2;
            console.log("\n"+num1+" - "+num2+" = "+result+"\n"); 
            break;
    
            case "*": result=num1*num2;
            console.log("\n"+num1+" * "+num2+" = "+result+"\n");
            break;
    
            case "/": result=num1/num2;
            console.log("\n"+num1+" / "+num2+" = "+result+"\n");
            break;
    
            default: console.log(chalk.bgRed("\nERROR : no such operator exists\n"));
            break;
        }

    }
    else if(choice===0)
    {
        Exit();
    }
    else
    {
        
        console.log(chalk.bgRed("\nERROR: SOMETHING WRONG ENTERED\n")); 
    }
    
}while(choice!=0);