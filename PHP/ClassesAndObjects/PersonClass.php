<?php

class Person {
    const AVG_LIFE_SPAN = 90;

    public $firstName;
    public $lastName;
    public $yearBorn;

    // code that runs immediately on class instantiation, this works like the constructor in JavaScript classes for setting up the variable values 
    function __construct($first = "", $last = "", $year = "") {
        // echo "I am the constructor";
        $this -> firstName = $first;
        $this -> lastName = $last;
        $this -> yearBorn = $year;
    }

    public function greeting() {
        echo 'Hello, my name is '.$this -> firstName."\n";
    }

    public function setFirstName($newName) {
        $this -> firstName = $newName;
    }

    public function getFullName() {
        return $this -> firstName." ".$this -> lastName;
    }
};