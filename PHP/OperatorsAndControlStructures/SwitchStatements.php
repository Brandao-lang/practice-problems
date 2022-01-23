<?php

$authors = ['C.K Lewis', 'J.K Rowling'];
$numOfAuthors = count($authors);

if ($numOfAuthors > 1) {
    echo 'there are '.$numOfAuthors.' authors'."\n";
}



// checks if the variable numOfAuthors equals any of these cases
switch ($numOfAuthors) {
    case 0:
        echo 'there are no authors'."\n";
        break;
    
    case 1:
        echo 'there is 1 author'."\n";
        break;
    
    default:
        echo 'there are '.$numOfAuthors.' authors'."\n";
}


