#!/bin/bash

PARAMETRO=$1

if [ ! -d "$PARAMETRO" ]
    then 
        echo "Não um diretório"
else 
        ls -f $PARAMETRO | wc -l 
fi
