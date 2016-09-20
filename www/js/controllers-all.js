app.controller('addCtrl', function ($scope,$window) {

    $scope.submitf = function () {
        var product = {};
        product.link = $scope.link;
        product.description = $scope.description;
        product.name = $scope.name;
        product.id = idGenerator();

        products.push(product);
        console.log(products);
        $window.location.href='#/'
    }

});

app.controller('ordersCtrl', function ($scope) {


    $scope.orders = orders;

    $scope.remove = function (id) {
        $scope.orders=$scope.orders.filter(function (el) {
            if (el.id!=id) return true;

        });
        orders=$scope.orders;
    }


});

app.controller('productCtrl', function ($scope, $routeParams) {
    //todo
    var id = $routeParams.id;
    console.log(" :", "$routeParams.id=", $routeParams.id);

    var queryProduct = products.filter(function (el) {
        if (el.id == id) return true;
    })
    console.log(" :", "queryProduct[0]=", queryProduct[0]);
    $scope.currentProduct =queryProduct[0]|| products[0];
});

app.controller('productsCtrl',function ($scope) {
   $scope.products=products;
   $scope.ordersCount=orders.length;
});
