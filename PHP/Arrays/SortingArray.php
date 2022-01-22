<?php

$nums = [3,2,5,6,1];

// simply sorts the array
sort($nums);

print_r($nums);

$books = array(
    "J.K Rowling" => "Harry Potter",
    "G.R.R Martin" => "Game of Thrones",
    "Andrez Sapkowksi" => "The Witcher"
);

// sorts the associative array while maintaining the keys
asort($books);

print_r($books);
