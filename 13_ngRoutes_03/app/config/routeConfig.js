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
        controller:"ClientsController",
        resolve:{
            routeInfo:function(){
                return {routeName:"Clients List",navClass:"navbar-inverse"};
            }
        }
    });

    $routeProvider.when("/client/:id",{
        templateUrl:"view/client.html",
        controller:"ClientController",
        resolve:{
            routeInfo:function(){
                return {routeName:"Client",navClass:"navbar-inverse"};
            }
        }
    });
    $routeProvider.otherwise({redirectTo:"/home"});
};