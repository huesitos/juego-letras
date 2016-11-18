function GameState(fuelGoal) {
    this.currentFuelGoal; // points needed to complete layer
    this.currentFuelScore; // points scored while playing
    
    this.setFuelGoal = function (fuelGoal) {
        this.currentFuelGoal = fuelGoal;
        this.currentFuelScore = 0;
    };
    
    this.setFuelGoal(fuelGoal);
};