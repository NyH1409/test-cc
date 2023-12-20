import promptSync from 'prompt-sync';
import {displayMenu} from "./menu.js";
const prompt = promptSync();

export const riceCooker = {
  ricePresent: false,
  riceCooked: false,
  steamingInProgress: false,
  heatingInProgress: false,
  //1+1+1+1 = 4 -> O(1) : constant complexity
  addRice() {
    if (!this.ricePresent) { //1
      this.ricePresent = true; //1
      console.log('Rice has been added.'); //1
    } else {
      console.log('There\'s already rice in the rice cooker.');  //1
    }
  },
  //2+1+1+1+1+1+1+n = n+8 -> O(n) : linear complexity
  cookRice() {
    if (this.ricePresent && !this.riceCooked) { //2
      console.log('Cooking rice...'); //1
      this.delaySync(1500); //n : the time it takes depends on the input n which equal to 1500 in this example
      this.riceCooked = true; //1
      console.log('The rice has been cooked!');  //1
    } else if (!this.ricePresent) { //1
      console.log('Cannot cook. The rice cooker is empty.'); //1
    } else {
      console.log('The rice is already cooked.'); //1
    }
  },

  //n + 9 : O(n) : linear complexity
  steam() {
    if (this.ricePresent && !this.steamingInProgress) { //2
      console.log('Steaming in progress...'); //1
      this.steamingInProgress = true; //1
      this.delaySync(1500); //n
      this.steamingInProgress = false; //1
      console.log('Steaming completed!'); //1
    } else if (!this.ricePresent) { //1
      console.log('Cannot steam. The rice cooker is empty.'); //1
    } else {
      console.log('Steaming is already in progress.'); //1
    }
  },

  //10 -> O(1) : constant complexity
  keepWarm() {
    if (this.ricePresent && this.riceCooked && !this.heatingInProgress) { //3
      console.log('The rice is now being kept warm.'); //1
      this.heatingInProgress = true; //1
    } else if (!this.ricePresent) { //1
      console.log('Cannot keep warm. The rice cooker is empty.'); //1
    } else if (!this.riceCooked) { //1
      console.log('Cannot keep warm. The rice is not cooked.'); //1
    } else {
      console.log('Keeping warm is already in progress.'); //1
    }
  },

  //9 -> O(1) : constant complexity
  removeRice() {
    if (this.ricePresent && (this.riceCooked || this.heatingInProgress)) { //3
      this.ricePresent = false; //1
      this.riceCooked = false; //1
      this.steamingInProgress = false; //1
      this.heatingInProgress = false; //1
      console.log('The rice has been removed from the rice cooker.'); //1
    } else {
      console.log('There\'s no rice to remove or it is not cooked yet.'); //1
    }
  },

  //n + 1 -> O(n) : linear complexity
  delaySync(ms) { //n : the time it takes depends on the input n which equal to 1500 in this example
    const start = Date.now(); //1
    while (Date.now() - start < ms) { //n
    }
  },
};

//2n + 57
export function simulateRiceCooker() {
  let input;
  const condition = true;//1

  //2n + 56 -> O(n) if the programm ends
  while (condition) { //Infinity : the programm never ends because there is no exit
    displayMenu(); //1
    input = prompt('Enter your choice: '); //1

    if (input) {
      const choice = parseInt(input); //2

      if (!isNaN(choice)) { //2
        if (choice === 1) { //1
          riceCooker.addRice(); //4
        } else if (choice === 2) { //1
          riceCooker.cookRice(); //n+8
        } else if (choice === 3) { //1
          riceCooker.steam(); //n+9
        } else if (choice === 4) { //1
          riceCooker.keepWarm(); //10
        } else if (choice === 5) { //1
          riceCooker.removeRice(); //11
        } else if (choice === 6) { //1
          console.log('Thank you for using the Rice Cooker Simulator. Goodbye!'); //1
          break;
        } else {
          console.log('Invalid choice. Please select a valid option.'); //1
        }
      } else {
        console.log('Invalid input. Please enter a valid number.'); //1
      }
    } else {
      console.log('No input provided.'); //1
    }
  }
}

simulateRiceCooker();