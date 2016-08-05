module.exports = function($http){
    var _getClients = function(){
        return $http.get('http://localhost:8080');
    };
    var _saveClients = function(client){
        return $http.post('http://localhost:8080',client);
    };

    return {
        getClients:_getClients,
        saveClients:_saveClients
    };
};