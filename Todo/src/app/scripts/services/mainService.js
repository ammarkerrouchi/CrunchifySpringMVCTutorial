angular.module('mytodoApp').factory('mainService', ['$http', function($http) {

	var service = {
		getUniteSource : getUniteSource
    }
	
	return service;

	function getUniteSource(uniteSourceId){
		return $http({
            method: "GET",
            url: "http://172.19.31.20:8080/intellibo-marklogic/v2/data/personnes/"+uniteSourceId
        });
	}
	 
}]);