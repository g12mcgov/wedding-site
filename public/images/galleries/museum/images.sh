# @Author: Grant McGovern
# @Date:   2022-05-08 13:49:47
# @Last Modified by:   Grant McGovern
# @Last Modified time: 2022-05-08 14:07:14

#!/bin/bash

echo "RUNNING"

i=0
for f in *.jpg; do
    echo "Processing file: $f"

    t=${i}.jpg
    tWebP=${i}.webp
  	
  	mv "$f" "$t" && echo "moved $f -> $t"
  	cwebp -q 80 $t -o $tWebP

    i=$(( i + 1 ))
    echo index $i
done