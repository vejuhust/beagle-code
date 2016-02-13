#!/bin/bash

echo 48 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio48/direction

blink_on=0
while [ 1 ]; do
    if [ $blink_on = 0 ]; then
        blink_on=1
    else
        blink_on=0
    fi
    echo $blink_on > /sys/class/gpio/gpio48/value
    sleep 0.5
done
