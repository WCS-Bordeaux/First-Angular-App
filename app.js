"use strict";

angular.module("todo", [
    "ui.router"
])

    .config(function($stateProvider, $urlRouterProvider) {
        var states = [
            {
                name: "home",
                url: "/home",
                component: "home"
            },
            {
                name: "contact",
                url: "/contact",
                component: "contact"
            }
        ]

        $urlRouterProvider.otherwise("/home")
        states.forEach(function(state) {
            $stateProvider.state(state);
        })
    })

;

