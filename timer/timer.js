const Timer = function(inputHours = 0, inputMinutes = 25) {

  if (inputHours < 0 || inputMinutes < 0) {
    console.error('Invalid input, please enter positive values');
    return;
  }

  this.countDownFrom = (inputHours * 60 * 60) + (inputMinutes * 60) ;
  this.intervalId = 0;
  this.timeLeft = 0;
};

timer.prototype.getCountDownFrom = function() {
  return this.countDownFrom;
}

timer.prototype.setCountDownFrom = function(inputHours, inputMinutes) {
  if (inputMinutes < 0) return 'Invalid Input';

  this.countDownFrom = (inputHours * 60 * 60) + (inputMinutes * 60);
  return this.countDownFrom;
}

timer.prototype.start = function(callback, stopCallback) {

  if (this.countDownFrom < 0) {
    console.error('Invalid countdown values');
    return;
  };

  this.timeLeft = this.timeLeft > 0 ? this.timeLeft : this.countDownFrom;

  this.intervalId = setInterval(() => {
    let [minutes, seconds] = [Math.floor(this.timeLeft / 60), (this.timeLeft % 60)]

    callback([minutes, seconds]);
    this.timeLeft--;
    if (this.timeLeft < 0 || !this.timeLeft) {
      this.stop(stopCallback);
    }
  }, 1000);
}

timer.prototype.stop = function(callback) {
  if (!callback) {
    callback = () => {};
  }
  clearInterval(this.intervalId);
  return callback();
}

timer.prototype.reset = function() {
  this.timeLeft = 0;
  return;
}


module.exports = Timer;

// To do:


// Refactor arguments to take array of arguments
// Accept dates
