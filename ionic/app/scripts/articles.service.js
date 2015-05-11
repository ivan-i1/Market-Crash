angular.module('starter')

.factory('Articles',function($resource){
	// var url = 'http://104.236.117.149'
	return $resource('../articles.json');
	// return $resource('');
});