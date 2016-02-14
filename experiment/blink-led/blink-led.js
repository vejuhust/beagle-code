var b = require('bonescript');

var targetPin = "P9_15";
var state = b.LOW;

b.pinMode(targetPin, b.OUTPUT);
setInterval(toggle, 500);

function toggle() {
    if (state == b.LOW) { 
        state = b.HIGH; 
    }
    else { 
        state = b.LOW;
    }
    b.digitalWrite(targetPin, state);
}
