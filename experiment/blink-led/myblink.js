var b = require('bonescript');

var leds = ["USR0", "USR1", "USR2", "USR3" ];
var state = b.LOW;

for(var i in leds) {
    b.pinMode(leds[i], b.OUTPUT);
}

setInterval(toggle, 500);

function toggle() {
    if (state == b.LOW) {
        state = b.HIGH;
    }
    else {
        state = b.LOW;
    }

    for(var i in leds) {
        b.digitalWrite(leds[i], state);
    }
}
