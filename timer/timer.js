const timer = function(inputMinutes = 25) {
  this.countDownFrom = inputMinutes * 5;
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

  const countDown = function() {
    console.log(count);
    count--;
    if (count === 0) {
      clearInterval(intervalId);
    }
    return count;
  }
  let intervalId = setInterval(countDown, 1000);
}



module.exports = timer;

