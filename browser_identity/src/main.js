import './style.css'

let geo = navigator.geolocation;
let geoPos = Geolocation.getCurrentPostition;
let geoDelta = Geolocation.getCurrentPostition;

console.log(`The value of your geo location {OBJECT} is: ${geo}`)

console.log(`The value of your geo location is: ${geoPos}`)
console.log(`The changed value of your geo location is: ${geoDelta}`)
console.log(`The value of your geo location is: ${geo}`)

document.querySelector('#app').innerHTML = `
  <div allow="geolocation">
    
  </div>
`

