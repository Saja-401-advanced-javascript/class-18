'use strict ';



const events = require('./events.js');

function log(event, payload) {
  let logTime = new Date();
  console.log({ event, logTime, payload });
}


events.on('log', log);