<?php

$authors = ['duuude', 'laa', 'Steve'];
$numOfAuthors = count($authors);

$moreThanOne = $numOfAuthors >= 1 ? 'Author Total: '.$numOfAuthors."\n" : 'there are no authors';


echo $moreThanOne;

$outcome = $numOfAuthors ?? 'count does not exist';

echo $outcome;