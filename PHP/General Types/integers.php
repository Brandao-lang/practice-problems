<?php

$regInt = -1234;

// octal, start num with a 0
$octNum = 01234;

// hexadecimal, start num with 0x followed by 0-9, A-F
$hexNum = 0xABC;

// binary, start num with 0b followed by the binary number
$binaryNum = 0b1000;

var_dump($regInt);
var_dump($octNum);
var_dump($hexNum);
var_dump($binaryNum);