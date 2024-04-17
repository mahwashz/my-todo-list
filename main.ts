#! user/bin/erv/ node

import inquirer from "inquirer"
let todos = [];
console.log("\n\t Welcome to my TODO Task list \t\n");


let condition = true;

while (condition) {
    
    
let addTask = await inquirer.prompt([
    {
name: "todo",
type: "input",
message: "What you want to add in your Todos?"

    },
    {
        name: "addMore",
        type: "confirm",
        message: "Do you want to add more?",
        default:"false"
    }
]);

//console.log(addTask.todo);
todos.push(addTask.todo);
condition = addTask.addMore
console.log(todos)
}

n






