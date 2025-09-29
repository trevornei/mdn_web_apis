import './style.css'

let geo = navigator.geolocation;
let geoPos = Geolocation.getCurrentPostition;
let geoDelta = Geolocation.getCurrentPostition;

// This was not working...
// I believe that this is because the function needs to be asynchronous? 
// Eh, I want to print this to the DOM and not the console anyways!
console.log(`The value of your geo location {OBJECT} is: ${geo}`)

console.log(`The value of your geo location is: ${geoPos}`)
console.log(`The changed value of your geo location is: ${geoDelta}`)
console.log(`The value of your geo location is: ${geo}`)

document.querySelector('#app').innerHTML = `
  <div allow="geolocation">
    
  </div>
`

