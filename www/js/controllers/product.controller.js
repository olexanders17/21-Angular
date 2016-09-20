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
