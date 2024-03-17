const Timer = require('../timer/timer.js');

const Pomodoro = function(workInputHours = 0, workInputMinutes = 25, restInputHours = 0, restInputMinutes = 5) {
  Timer.call(this, workInputHours, workInputMinutes);
  this.workTime = this.countDownFrom;
  this.restTime = (restInputHours * 60 * 60) + (restInputMinutes * 60);
  this.workTimeLeft = this.timeLeft;
  this.restTimeLeft = 0;
  this.workIntervalId = this.intervalId;
  this.restIntervalId = 0;
};

Pomodoro.prototype = Object.create(Timer.prototype);
Pomodoro.prototype.constructor = Pomodoro;

Pomodoro.prototype.getWorkTime = function() {
  return this.workTime;
}

Pomodoro.prototype.setWorkTime = function(inputHours, inputMinutes) {
  if (inputMinutes < 0 || inputHours < 0) return 'Invalid Input';

  this.workTime = (inputHours * 60 * 60) + (inputMinutes * 60);
  return this.workTime;
}

Pomodoro.prototype.getRestTime = function() {
  return this.restTime;
}

Pomodoro.prototype.setRestTime = function(inputHours, inputMinutes) {
  if (inputMinutes < 0 || inputHours < 0) return 'Invalid Input';

  this.restTime = (inputHours * 60 * 60) + (inputMinutes * 60);
  return this.restTime;
}

Pomodoro.prototype.startWork = function(startCallback, stopCallback, restStartCb, restStopCb) {

  if (this.workTime < 0) {
    console.error('Invalid work time values');
    return;
  };
  this.workTimeLeft = this.workTimeLeft > 0 ? this.workTimeLeft : this.workTime;

  this.workIntervalId = setInterval(() => {
    let [minutes, seconds] = [Math.floor(this.workTimeLeft / 60), (this.workTimeLeft % 60)];

    startCallback([minutes, seconds]);
    this.workTimeLeft--;
    if (this.workTimeLeft < 0 || !this.workTimeLeft) {
      stopCallback();
      this.stopWork(restStartCb, restStopCb)
    }
  }, 1000);

}

Pomodoro.prototype.stopWork = function(restStartCb, restStopCb) {
  if (!restStartCb) {
    restStartCb = () => {};
  };
  if (!restStopCb) {
    restStopCb = () => {};
  };

  clearInterval(this.workIntervalId);
  this.startRest(restStartCb, restStopCb)
  return this.workIntervalId;
}

Pomodoro.prototype.startRest = function(startCallback, stopCallback) {

  if (this.restTime < 0) {
    console.error('Invalid work time values');
    return;
  };
  this.restTimeLeft = this.restTimeLeft > 0 ? this.restTimeLeft : this.restTime;

  this.restIntervalId = setInterval(() => {
    let [minutes, seconds] = [Math.floor(this.restTimeLeft / 60), (this.restTimeLeft % 60)];

    startCallback([minutes, seconds]);
    this.restTimeLeft--;
    if (this.restTimeLeft < 0 || !this.restTimeLeft) {
      this.stopRest(stopCallback)
    }
  }, 1000);
}

Pomodoro.prototype.stopRest = function(callback) {
  if (!callback) {
    callback = () => {};
  }
  clearInterval(this.restIntervalId);
  return callback()
}

// Todo: add logic to permanently alternate between work and rest untill stop is called;
Pomodoro.prototype.start = function(workStartCb, workStopCb, restStartCb, restStopCb) {
  this.startWork(workStartCb, workStopCb, restStartCb, restStopCb);
}

Pomodoro.prototype.reset = function() {
  this.workTimeLeft = this.workTime;
  this.restTimeLeft = this.restTime;
  return;
}

Pomodoro.prototype.stop = function() {
  clearInterval(this.workIntervalId);
  clearInterval(this.restIntervalId);
  this.reset();
}

Pomodoro.prototype.pause = function () {
  // add logic to be able to pause and restart where it left off
}

module.exports = Pomodoro;