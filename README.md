# Stand-Sit Timer

This is a simple JavaScript countdown timer module that allows you to create and manage countdown timers. It provides methods for setting the initial countdown time, starting, stopping, resetting, and retrieving the current countdown value.

## Usage

### Installation

Install the module using npm:

```bash
npm install standsit-timer
```

### Example

```javascript
// I am working towards including several timer classes within the package
// For the default timer use .timer after require.
const Timer = require('my-countdown-timer').timer;
// For the pomodoro timer use .pomodoro after require
const Pomodoro = require('my-countdown-timer').pomodoro;

// Create a new timer with default values (0 hours, 25 minutes)
const myTimer = new Timer();

// Start the timer with a callback function to handle each second tick
myTimer.start((timeLeft) => {
  console.log(`Time left: ${timeLeft} seconds`);
}, () => {
  console.log('Timer has stopped');
});

// Stop the timer after 2000 milliseconds
setTimeout(() => {
  myTimer.stop();
}, 2000);
```

## API

### `new Timer([inputHours], [inputMinutes])`

Creates a new timer with the specified initial countdown values in hours and minutes. Default values are 0 hours and 25 minutes. If negative values are provided, an error will be logged, and the timer won't be created.

### `getCountDownFrom()`

Returns the initial countdown value in seconds.

### `setCountDownFrom(inputHours, inputMinutes)`

Sets a new countdown value based on the provided hours and minutes. If negative values are provided, the function returns an 'Invalid Input' message.

### `start(callback, stopCallback)`

Starts the countdown timer. The `callback` function is called every second with the current time left. The `stopCallback` function is optional and is called when the timer reaches zero or is manually stopped.

The callback will be called with an argument array that contains minutes and seconds [minutes, seconds]
ex: callback([minutes, seconds])

### `stop(callback)`

Stops the countdown timer. The optional `callback` function is called after the timer is stopped.
It's important to note that this callback is a different callback than the one passed to start function (stopCallback).

### `reset()`

Resets the timer, setting the remaining time to 0.
When start gets called again, it will start from the user inputted time.

### Pomodoro Timer

This Pomodoro Timer extends the functionality of the basic countdown timer, adding features specifically tailored for the Pomodoro technique. It allows for alternating between work and rest intervals, with customizable durations for each.


const Pomodoro = require('../timer/timer.js').pomodoro;

// Create a new Pomodoro timer with default work and rest durations (25 minutes work, 5 minutes rest)
const myPomodoro = new Pomodoro();

// Start the Pomodoro timer with callbacks for work and rest intervals
myPomodoro.start(workStartCallback, workStopCallback, restStartCallback, restStopCallback);

// Stop the Pomodoro timer
myPomodoro.stop();
API
new Pomodoro([workInputHours], [workInputMinutes], [restInputHours], [restInputMinutes])
Creates a new Pomodoro timer with specified initial work and rest durations in hours and minutes. Default values are 25 minutes for work and 5 minutes for rest. If negative values are provided, an error will be logged, and the timer won't be created.

getWorkTime()
Returns the duration of the work interval in seconds.

setWorkTime(inputHours, inputMinutes)
Sets a new duration for the work interval based on the provided hours and minutes. If negative values are provided, the function returns an 'Invalid Input' message.

getRestTime()
Returns the duration of the rest interval in seconds.

setRestTime(inputHours, inputMinutes)
Sets a new duration for the rest interval based on the provided hours and minutes. If negative values are provided, the function returns an 'Invalid Input' message.

start(workStartCallback, workStopCallback, restStartCallback, restStopCallback)
Starts the Pomodoro timer, alternating between work and rest intervals. Callback functions are provided for each interval to handle start and stop events.

stop()
Stops the Pomodoro timer.

reset()
Resets the Pomodoro timer, setting both work and rest intervals to their initial durations.

## License

This countdown timer module is released under the [MIT License](LICENSE).
