import { asyncAdd } from "./async";

let values = [10, 20, 30, 40, 50];

async function doTask() {
    let total = await asyncAdd(values);
    console.log(`Main Total: ${total}`);

    console.log("Hello");
    console.log("Apples");
    console.log("This is a statement");
    console.log("This is also a statement");
}

doTask();

const myFunc = function() {
    console.log("This statement is inside the function");
};

console.log("This statement is outside the function");

myFunc();