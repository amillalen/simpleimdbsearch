'use strict';

var imdbServices = angular.module('imdbServices', ['ngResource']);

imdbServices.factory('basicSearch', [ '$resource',
   function($resource){
    return $resource("imdbapi/imdbapi.php?method=find&api=v1&appid=iphone1&locale=es_CL&q=:imdbquery&device=0&sig=app1", {}, {
          get: {method: 'GET', cache: false, isArray: false }
    });
}]);



