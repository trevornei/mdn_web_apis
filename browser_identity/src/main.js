import './style.css'

// Findings: 
// 1. Navigator.geolocation allows access to methods NOT objects...
let geo = navigator.geolocation;
// So, I assuming that the pseudo code would look like:
// async function <geo_var>() { return .methods(available) }
let geoPos = Geolocation.getCurrentPostition;
let geoDelta = Geolocation.getCurrentPostition;


document.querySelector('#app').innerHTML = `
  <div allow="geolocation">
    
  </div>
`

