'use strict';

angular.module('mytodoApp')
  .controller('MainCtrl', ['$scope', 'mainService', function ($scope, mainService) {
    $scope.todos = [];

    $scope.showdata = true;
        $scope.addTodo = function () {
        	var found = $.inArray($scope.todo, $scope.todos);
        	if ($scope.todo && found == -1) {
      $scope.todos.push($scope.todo);
      $scope.todo = '';}

      $scope.removeTodo = function ($index) {
      	$scope.todos.splice($index, 1);}
    };
    
   mainService.getUniteSource(0)
   		.success(successPerson)
   		.error(function(){
	   $scope.showdata = false;
   });
   // mainService.getUniteSource(0).error(errorPerson);

    function successPerson(data){
    	$scope.unitesource = data;
    	console.log($scope.unitesource);
    }
  }]);