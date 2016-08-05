module.exports = function($scope,$filter,clientAPIService,configValue,routeInfo,$routeParams){
    $scope.name = $filter("uppercase")(configValue.appName);
    $scope.msg = "";
    $scope.clients = [];
    $scope.page = routeInfo.routeName;
    $scope.navClass = routeInfo.navClass;

    var listClient = function(){
        clientAPIService.getClient($routeParams.id).success(function(data,status){
            //console.log(data);
            //console.log(status);
            $scope.client = data;
        });
    };

    listClient();

};