<?php

$author_first_name = "William";
$author_last_name = "Shakespeare";

function bookAuthor($first, $last) {
    $full = $first." ".$last;
    return $full;
};

$full_name = bookAuthor($author_first_name, $author_last_name);

echo $full_name;