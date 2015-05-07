angular.module('starter')

.factory('Articles',function($resource){
	return $resource('../articles.json');
});