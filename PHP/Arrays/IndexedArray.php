<?php

$letters = array('a', 'b', 'c', 'd');
$names = ['john', 'steve', 'kevin'];

// true
echo in_array('steve', $names);

// push Billy to the names array
array_push($names, 'Billy');

echo $names;

echo "\n";

// remove the last element from the names array
$last_person = array_pop($names);

echo $last_person;
print_r($names);

// removes an element from the array
unset($names[1]);

print_r($names);