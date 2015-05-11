angular.module('starter')

.factory('Lists',function($resource){
	return $resource('../lists.json');
	// return $resource('http://104.236.117.149');
});