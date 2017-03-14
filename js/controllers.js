var myContrl = angular.module('controllers', []);
myContrl.controller('Controller', function($scope) {

	$scope.message = 'test';

	$scope.topics = [{
		name: 'Butterscotch',
		price: 50
	}, {
		name: 'Black Current',
		price: 100
	}, {
		name: 'Mango',
		price: 20
	}];

	$scope.bbb = function(u) {
		console.log(u)
	}
	

});