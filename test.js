const Pomodoro = require('./pomodoro_timer/pomodoro_timer.js');

let myclock = new Pomodoro(0, 0.2, 0, 0.15);


const callback = (time) => {
  console.log(time, 'WORKING');
}

const callback2 = (time) => {
  console.log(time, 'Stopping Work');
}

const callback3 = (time) => {
  console.log(time, 'Resting');
}

const callback4 = (time) => {
  console.log(time, 'Stopping Rest');
}


myclock.start(callback,callback2,callback3,callback4);