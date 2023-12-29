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

## License

This countdown timer module is released under the [MIT License](LICENSE).
