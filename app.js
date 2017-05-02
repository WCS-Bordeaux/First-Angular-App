"use strict";

angular.module("todo", [
    "ui.router"
])

    .config(function($stateProvider, $urlRouterProvider) {
        var states = [
            {
                url: "/home",
                component: "home"
            },
            {
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

