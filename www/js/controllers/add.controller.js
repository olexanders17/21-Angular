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
