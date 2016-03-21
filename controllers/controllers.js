'use strict';

var appControllers = angular.module('appControllers', []);



appControllers.controller('MainCtrl', ['$scope', '$location', '$http', 'basicSearch',
    function MainCtrl($scope, $location, $http, basicSearch) {
        $scope.message = "";
$scope.isMovie = function( ) {
  return function( item ) {
    return item.title;
  };
};	

$scope.refToIcaledImg200 = function(imdburl){
   return imdburl.replace('.jpg','UX200_CR0,0,200_AL_.jpg');
};
	$scope.searchBasicImdb=function(query){
            $scope.imdbdata=basicSearch.get({imdbquery:$scope.textSearch});
        }
    }]);

