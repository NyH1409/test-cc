export const riceCooker = {
    ricePresent: false,
    riceCooked: false,
    steamingInProgress: false,
    heatingInProgress: false,
  
    addRice() {
        if(this.ricePresent){
            return "There\'s already rice in the rice cooker."
        }
        this.ricePresent=true
        return  "Rice has been added."
    },
  
    cookRice() {
        if(!this.ricePresent){
            return "Cannot cook. The rice cooker is empty.";
        }
        if (this.ricePresent && !this.riceCooked){
            console.log('Cooking rice...');
            this.delaySync(1500);
            this.riceCooked = true;
            return "The rice has been cooked!"
        }
        return 'The rice is already cooked.'
    },
  
    steam() {
        if (!this.ricePresent) {
            return "Cannot steam. The rice cooker is empty."
        }
        if (this.ricePresent && !this.steamingInProgress) {
            console.log('Steaming in progress...');
            this.steamingInProgress = true;
            this.delaySync(1500);
            this.steamingInProgress = false;
            return 'Steaming completed!';
        }
        return 'Steaming is already in progress.';
    },
  
    keepWarm() {
        if (!this.ricePresent) {
            return "Cannot keep warm. The rice cooker is empty."
        }
        if (!this.riceCooked) {
            return "Cannot keep warm. The rice is not cooked."
        }
        if (this.ricePresent && this.riceCooked && !this.heatingInProgress) {
            this.heatingInProgress = true;
            return 'The rice is now being kept warm.'
        }
        return 'Keeping warm is already in progress.'
    },
  
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
  
    delaySync(ms) {
      const start = Date.now();
      while (Date.now() - start < ms) {
      }
    },
    
  };