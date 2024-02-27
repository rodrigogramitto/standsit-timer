const Timer = require('../timer/timer.js');


// work on after refactoring input arguments
const Pomodoro = function(workInputHours = 0, workInputMinutes = 25, restInputHours = 0, restInputMinutes = 5) {
  Timer.call(this, workInputHours, workInputMinutes);
  this.restInputHours = restInputHours;
  this.restInputMinutes = restInputMinutes;
};

Pomodoro.prototype = Object.create(Timer.prototype);

Pomodoro.prototype.constructor = Pomodoro;

Pomodoro.prototype.start = function() {
 // copy timer logic ando modify so that it alternates between work and rest unless stop is called.
}

Pomodoro.prototype.pause = function () {
  // add logic to be able to pause and restart where it left off
}
const myTimer = new Pomodoro();

console.log(myTimer)