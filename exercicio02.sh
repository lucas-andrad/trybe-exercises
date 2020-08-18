#!/bin/bash 
VAR='/home/ana/unix_tests/exerpair.sh'

if [ -e "$VAR" ]
then 
    echo "O caminho está habilitado"
fi

if [ -w "$VAR" ]
    then 
        echo "Você tem permissão para escrever"
    else 
        echo "Você NÂO foi autorizado a editar"
fi
