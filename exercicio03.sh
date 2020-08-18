#!/bin/bash

CAMINHO=$1

if [ -d $CAMINHO ]
    then 
        echo "É um diretório"
elif [ -f $CAMINHO ]
    then
        echo "É um arquivo"
    else 
        echo "É uma coisa qlqr"
fi
ls -l $CAMINHO
      