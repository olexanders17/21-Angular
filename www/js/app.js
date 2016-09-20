var app = angular.module('shop', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: 'pages/home.html'})
        .when('/add', {templateUrl: 'pages/add.html'})
        .when('/home', {templateUrl: 'pages/home.html'})
        .when('/my-orders', {templateUrl: 'pages/my-orders.html'})
        .when('/product-page/:id', {templateUrl: 'pages/product-page.html'})
        .when('/product-page/', {templateUrl: 'pages/product-page.html'});

});




