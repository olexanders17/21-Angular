app.controller('ordersCtrl', function ($scope) {


    $scope.orders = orders;

    $scope.remove = function (id) {
        $scope.orders=$scope.orders.filter(function (el) {
            if (el.id!=id) return true;

        });
        orders=$scope.orders;
    }


});
