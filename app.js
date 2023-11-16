
/*-------------------------------- Constants --------------------------------*/
// console.log("hello") constants are variables that you define at the top of your program that do NOT change!!



/*---------------------------- Variables (state) ----------------------------*/





/*------------------------ Cached Element References ------------------------*/
// A *cached element reference* is a technique in which a DOM element is stored in a variable for future use, minimizing the need to repeatedly query the DOM to access the same element, thus improving performance in web apps.

const secondHand = document.querySelector('.second-hand')
const minsHand = document.querySelector('minute-hand')
const hourHand = document.querySelector('hour-hand')



/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

function setDate() {
  const now = new Date()
  
  const seconds = now.getSeconds()
  const secondsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  
  const mins = now.getMinutes()
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`

  const hour = now.getHours()
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90
  hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

setInterval(setDate, 1000)

setDate()



