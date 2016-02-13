#!/usr/bin/env python

from Adafruit_BBIO import GPIO
from time import sleep

targetPin = "P9_15"
GPIO.setup(targetPin, GPIO.OUT)

status = GPIO.LOW

while True:
    if status == GPIO.LOW:
        status = GPIO.HIGH
    else:
        status = GPIO.LOW
    GPIO.output(targetPin, status)
    sleep(0.5)

GPIO.cleanup()
