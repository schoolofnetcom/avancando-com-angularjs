require('angular');
require('./locale/angular-locale_pt-br.js');

var MainController = require('./controllers/MainController');

angular.module('app',[]);
angular.module('app').controller('MainController',['$scope','$http','$filter',MainController]);