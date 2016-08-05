require('angular');
require('./locale/angular-locale_pt-br');

var MainController = require('./controllers/MainController');
var maskTel = require('./directives/maskTel');

angular.module('app',[]);
angular.module('app').directive('maskTel',[maskTel]);
angular.module('app').controller('MainController',['$scope','$http','$filter',MainController]);