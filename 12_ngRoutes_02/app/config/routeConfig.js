module.exports = function($routeProvider){
    $routeProvider.when("/home",{
        templateUrl:"view/home.html",
        controller:"MainController",
        resolve:{
            routeInfo:function(){
                return {routeName:"Home",navClass:"navbar-default"};
            }
        }
    });
    $routeProvider.when("/clients",{
        templateUrl:"view/clients.html",
        controller:"MainController",
        resolve:{
            routeInfo:function(){
                return {routeName:"Home",navClass:"navbar-inverse"};
            }
        }
    });
    $routeProvider.otherwise({redirectTo:"/home"});
};