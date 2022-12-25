#!/bin/bash

DIR_PATH=$1
START_NUM=$2

echo "DIR_PATH: $DIR_PATH"

index=$START_NUM
for filename in $DIR_PATH*.jpg; do
    new_name_jpg="$index.jpg"
    new_name_webp="$index.webp"
    # echo "filename: $(pwd)/$filename"
    mv $(pwd)/$filename $(pwd)/$new_name_jpg
    echo "Renamed $filename -> $new_name_jpg"
    cwebp -q 80 $new_name_jpg -o $new_name_webp
    ((index++))
    break
done
