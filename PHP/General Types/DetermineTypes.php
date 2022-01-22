<?php

define('NEW_CONSTANT', 'Hello new constant');

$intVar = 1234;
$stringVar = "I'm a string!";
$boolVar = true;
$floatVar = 12.34;

// check if intVar is an integer
$isNum = is_int($intVar);
$isString = is_string($stringVar);
$isFloat = is_float($floatVar);
$doesExist = defined('NEW_CONSTANT');


// if the value is true it will print 1, otherwise it will print nothing
echo $isNum;
echo $isString;
echo $boolVar;
echo $isFloat;
echo $doesExist;