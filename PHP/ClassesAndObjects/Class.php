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
        echo 'Hello, my name is '.$this -> firstName;
    }

    public function setFirstName($newName) {
        $this -> firstName = $newName;
    }

    public function getFullName() {
        return $this -> firstName." ".$this -> lastName;
    }
};

$person1 = new Person('Elijah', 'Brandao', 1996);

// This is the syntax to access an object property, or reassign a property value
echo $person1 -> firstName." \n";

$person1 -> firstName = 'Steve'." \n";

echo $person1 -> firstName;


// accessing a constant in the class
echo $person1::AVG_LIFE_SPAN."\n";



// accessing and using class methods
echo $person1 -> greeting()."\n";
$person1 -> setFirstName('Elijah');
echo $person1 -> greeting()."\n";

$fullName = $person1 -> getFullName();

echo $fullName."\n";



// Class inheritance 
class Author extends Person {
    public $penName = 'Harry Potter Person';

    public function getPenName() {
        return $this -> penName;
    }

    public function getCompleteName() {
        return $this -> firstName." ".$this -> lastName.", Pen Name: ".$this -> penName;
    }
}

$author1 = new Author("Samuel", "Clemens", 1899);
$authorFullName = $author1 -> getFullName();
$authorCompleteName = $author1 -> getCompleteName();

echo $authorFullName."\n";
echo $authorCompleteName;













