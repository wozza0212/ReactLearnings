import { importThisLog } from "./importThisFunc";

const myArrowFunction = (name) => {
    console.log(`${name} just fired an Arrow`);
}
myArrowFunction('James');

const smallMultiplier = (firstNum, multiplier) => {
    console.log(firstNum * multiplier);
}

smallMultiplier(60, 20);
importThisLog("Jimmy");