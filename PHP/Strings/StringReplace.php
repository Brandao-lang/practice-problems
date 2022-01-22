<?php

// Replace all occurrences of the search string with the replacement string

$quote = 'to be or not to be? That is the question.';

$replaced = str_replace('be', 'know', $quote, $count);

echo $replaced;

echo "\n";

echo $count;