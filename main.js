import promptSync from 'prompt-sync';
import { riceCooker } from './model.js';

const prompt = promptSync();

//2n + 50
function simulateRiceCooker() {
  let input;
  const condition = true; //1

  //2n + 49 -> O(n) if the programm ends
  while (condition) { //Infinity : the programm never ends because there is no exit
    //displayMenu(); //1
    input = +prompt('Enter your choice: '); //1

    switch (input) { //1 it will break if the case is verified
        case 1:
            console.log(riceCooker.addRice()); //1 + 4
            break;
        case 2:
            console.log(riceCooker.cookRice());; //1 + n+8
            break;
        case 3:
            riceCooker.steam(); //It should be logged here so : 1 + n+9
            break;
        case 4:
            riceCooker.keepWarm(); //It should be logged here so : 1 + 10
            break;
        case 5:
            riceCooker.removeRice(); //It should be logged here so : 1 + 9
            break;
        case 6:
            console.log('Thank you for using the Rice Cooker Simulator. Goodbye!'); //1
            break;
        default:
            console.log("Verify the provided input."); //1
            break;
    }
  }
}

simulateRiceCooker();