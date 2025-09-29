import './style.css';

import { checkLoc } from './geoLoc';
let getLoc = checkLoc();
console.log(getLoc);
document.querySelector('#app').innerHTML = `
  <div allow="geolocation">
    
  </div>
`

