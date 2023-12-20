export const riceCooker = {
    ricePresent: false,
    riceCooked: false,
    steamingInProgress: false,
    heatingInProgress: false,

    //1+1+1+1 = 4 -> O(1) : constant complexity
    addRice() {
        if(this.ricePresent){ //1
            return "There\'s already rice in the rice cooker." //1
        }
        this.ricePresent=true //1
        return  "Rice has been added." //1
    },
    
  
    //1+1+2+1+1+1+1+n = n+8 -> O(n) : linear complexity
    cookRice() {
        if(!this.ricePresent){ //1
            return "Cannot cook. The rice cooker is empty."; //1
        }
        if (this.ricePresent && !this.riceCooked){ //2
            console.log('Cooking rice...'); //1
            this.delaySync(1500); //n
            this.riceCooked = true; //1
            return "The rice has been cooked!" //1
        }
        return 'The rice is already cooked.' //1
    },
  
    //n + 9 : O(n) : linear complexity
    steam() {
        if (!this.ricePresent) { //1
            return "Cannot steam. The rice cooker is empty." //1
        }
        if (this.ricePresent && !this.steamingInProgress) { //2
            console.log('Steaming in progress...'); //1
            this.steamingInProgress = true; //1
            this.delaySync(1500); //n
            this.steamingInProgress = false; //1
            return 'Steaming completed!'; //1
        }
        return 'Steaming is already in progress.'; //1
    },

  
    //10 -> O(1) : constant complexity
    keepWarm() {
        if (!this.ricePresent) { //1
            return "Cannot keep warm. The rice cooker is empty." //1
        }
        if (!this.riceCooked) { //1
            return "Cannot keep warm. The rice is not cooked." //1
        }
        if (this.ricePresent && this.riceCooked && !this.heatingInProgress) { //3
            this.heatingInProgress = true; //1
            return 'The rice is now being kept warm.' //1
        }
        return 'Keeping warm is already in progress.' //1
    },
    
    //9 -> O(1) : constant complexity
    removeRice() {
        if (this.ricePresent && (this.riceCooked || this.heatingInProgress)) {
            this.ricePresent = false;
            this.riceCooked = false;
            this.steamingInProgress = false;
            this.heatingInProgress = false;
            return 'The rice has been removed from the rice cooker.';
        }
        return 'There\'s no rice to remove or it is not cooked yet.';
    },
  
    //n + 1 -> O(n) : linear complexity
    delaySync(ms) {
      const start = Date.now(); //1
      while (Date.now() - start < ms) { //n
      }
    },
    
  };