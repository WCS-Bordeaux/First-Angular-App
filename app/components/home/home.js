"use strict";

angular.module("todo")

    .component("home", {
        templateUrl: "app/components/home/home.html",
        controller: Main
    })

;

function alertMe(name) {
    alert(name);
}

function deletePerson(persons, index) {
    persons.splice(1, index);
}

function Main() {
    this.name = "";
    this.title = "cest la home page!";
    this.alertMyName = alertMe;
    this.deletePerson = deletePerson;

    this.persons = [
        {
            name: "Jonathan",
            age: 25
        },
        {
            name: "Julien",
            age: 25
        },
        {
            name: "Johan",
            age: 25
        },
        {
            name: "Johnny",
            age: 25
        }
    ]
}

