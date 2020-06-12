#!/bin/bash
# resize images to <= 2000x2000 pixels to reduce file size
mogrify -resize 2000x2000 "$1"
mogrify -quality 75 "$1"
