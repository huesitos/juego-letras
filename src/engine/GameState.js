function GameState(fuelGoal) {
    this.currentFuelGoal; // points needed to complete map
    this.currentFuelGoal = fuelGoal;
    
    this.currentFuelScore = 0;
    
    this.resetFuelGoal = function (fuelGoal) {
        this.currentFuelGoal = fuelGoal;
    };
};