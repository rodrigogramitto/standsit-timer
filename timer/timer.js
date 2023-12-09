const timer = function(inputMinutes = 25) {
  this.countDownFrom = inputMinutes * 5;
  this.intervalId = 0;
};

timer.prototype.getCountDownFrom = function() {
  return this.countDownFrom;
}

timer.prototype.setCountDownFrom = function(inputMinutes) {
  this.countDownFrom = inputMinutes * 60;
}

timer.prototype.start = function() {
  // initiate a variable to setInterval to store intervalID
  let count = this.countDownFrom;

  this.intervalId = setInterval(() => {
    console.log(`00:${count}`);
    count--;
    if (count < 0) {
      this.stop();
    }
  }, 1000);
}

timer.prototype.stop = function() {
  clearInterval(this.intervalId);
}


module.exports = timer;

