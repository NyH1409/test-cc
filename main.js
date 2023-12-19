import promptSync from 'prompt-sync';
import { riceCooker } from './model.js';

const prompt = promptSync();


function simulateRiceCooker() {
  let input;
  const condition = true;

  while (condition) {
    //displayMenu();
    input = +prompt('Enter your choice: ');

    switch (input) {
        case 1:
            console.log(riceCooker.addRice());
            break;
        case 2:
            console.log(riceCooker.cookRice());;
            break;
        case 3:
            riceCooker.steam();
            break;
        case 4:
            riceCooker.keepWarm();
            break;
        case 5:
            riceCooker.removeRice()
            break;
        case 6:
            console.log('Thank you for using the Rice Cooker Simulator. Goodbye!');
            break;
        default:
            console.log("Verify the provided input.");
            break;
    }
  }
}

simulateRiceCooker();