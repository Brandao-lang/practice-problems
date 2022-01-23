<?php
// This is how we import code from one file to another
include 'PersonClass.php';

$newGuy = new Person('Steve', 'Rogers', 1918);

$newGuy -> greeting();

$CaptainAmerica = $newGuy -> getFullName();

echo $CaptainAmerica;