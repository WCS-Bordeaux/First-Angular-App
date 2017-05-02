"use strict";

angular.module("todo")

    .component("contact", {
        templateUrl: "app/components/contact/contact.html",
        controller: Contact
    })

;

function Contact() {
    this.contact = "contactme!";
}