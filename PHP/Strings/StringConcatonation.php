<?php

$currency = 'penny';

$sampleString = 'A '.$currency.' saved is a '.$currency.' earned';

// with double quotes you can insert variables straight into the string without the dot notation like above, which is required with single quotes
$doubleQuoteSampleString = "A $currency saved is a $currency earned";

echo $sampleString;
echo "\n";
echo $doubleQuoteSampleString;
echo "\n";

$var = 2;
echo "{$var}nd place";