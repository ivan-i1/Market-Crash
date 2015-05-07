angular.module('starter')

.factory('Lists',function($resource){
	return $resource('../lists.json');
});