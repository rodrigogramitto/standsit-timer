const timer = function(inputMinutes = 25) {
  this.countDownFrom = (inputMinutes * 60) + 1;
  this.intervalId = 0;
  this.timeLeft = 0;
};

timer.prototype.getCountDownFrom = function() {
  return this.countDownFrom;
}

timer.prototype.setCountDownFrom = function(inputMinutes) {
  this.countDownFrom = (inputMinutes * 60) + 1;
}

timer.prototype.start = function() {
  // initiate a variable to setInterval to store intervalID
  this.timeLeft = this.countDownFrom

  this.intervalId = setInterval(() => {
    this.timeLeft--;
    if (this.timeLeft < 0) {
      this.stop();
    }
  }, 1000);
}

timer.prototype.stop = function() {
  clearInterval(this.intervalId);
}


module.exports = timer;

// To-Do:

// Make sure count is the right value
// accept hours as input

const myTimer = new timer();


myTimer.start();

setInterval(() => {console.log(myTimer.timeLeft)}, 1000);

