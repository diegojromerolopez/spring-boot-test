#!/bin/bash

if [ "$#" -ne 1 ]; then
    echo "Error. A course id is needed"
    echo "Usage ./delete_course <numeric course id>"
    exit 1
fi

curl -d '' http://localhost:8080/courses/$1/delete