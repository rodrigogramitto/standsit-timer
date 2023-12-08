const timer = require('../timer/timer.js');

// describe('should instantiate a new timer', ()=> {

//   test('should default to 1500 seconds if no time is provided', () => {
//     let myTimer = new timer();
//     expect(myTimer.countDownFrom).toBe(1500)
//   });
//   test('should equal inputted value in seconds if val is provided', () => {
//     let myTimer = new timer(1);
//     expect(myTimer.countDownFrom).toBe(60);
//   })
// })

let myTimer = new timer(1);

myTimer.start();