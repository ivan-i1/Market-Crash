// angular.module('rest.controller',['restangular'])

//   .init(function(){
//     // First way of creating a Restangular object. Just saying the base URL
//     var baseArticles = Restangular.all('articles');

//     // This will query /articles and return a promise.
//     baseArticles.getList().then(function(articles) {
//       $scope.allArticles = articles;
//     });

    
//   })
//   .GET(function(){
//     // Does a GET to /articles
//     // Returns an empty array by default. Once a value is returned from the server
//     // that array is filled with those values. So you can use this in your template
//     $scope.articles = Restangular.all('articles').getList().$object;
//   })
//   .POST(function(){
//     var newArticle = {name: "Gonto's article"};

//     // POST /articles
//     baseArticles.post(newArticle);
//   })
//   .DELETE(function(){

//   });




// // GET to http://www.google.com/ You set the URL in this case
// Restangular.allUrl('arts', '../articles.json').getList();

// // GET to http://www.google.com/1 You set the URL in this case
// Restangular.oneUrl('googlers', 'http://www.google.com/1').get();

// // You can do RequestLess "connections" if you need as well

// // Just ONE GET to /articles/123/buildings/456
// Restangular.one('articles', 123).one('buildings', 456).get()

// // Just ONE GET to /articles/123/buildings
// Restangular.one('articles', 123).getList('buildings')

// // Here we use Promises then
// // GET /articles
// baseArticles.getList().then(function (articles) {
//   // Here we can continue fetching the tree :).

//   var firstArticle = articles[0];
//   // This will query /articles/123/buildings considering 123 is the id of the firstArticle
//   $scope.buildings = firstArticle.getList("buildings");

//   // GET /articles/123/places?query=param with request header: x-user:mgonto
//   $scope.loggedInPlaces = firstArticle.getList("places", {query: param}, {'x-user': 'mgonto'})

//   // This is a regular JS object, we can change anything we want :)
//   firstArticle.name = "Gonto"

//   // If we wanted to keep the original as it is, we can copy it to a new element
//   var editFirstArticle = Restangular.copy(firstArticle);
//   editFirstArticle.name = "New Name";


//   // PUT /articles/123. The name of this article will be changed from now on
//   firstArticle.put();
//   editFirstArticle.put();

//   // PUT /articles/123. Save will do POST or PUT accordingly
//   firstArticle.save();

//   // DELETE /articles/123 We don't have first article anymore :(
//   firstArticle.remove();

//   var myBuilding = {
//     name: "Gonto's Building",
//     place: "Argentina"
//   };

//   // POST /articles/123/buildings with MyBuilding information
//   firstArticle.post("Buildings", myBuilding).then(function() {
//     console.log("Object saved OK");
//   }, function() {
//     console.log("There was an error saving");
//   });

//   // GET /articles/123/users?query=params
//   firstArticle.getList("users", {query: params}).then(function(users) {
//     // Instead of posting nested element, a collection can post to itself
//     // POST /articles/123/users
//     users.post({userName: 'unknown'});

//     // Custom methods are available now :).
//     // GET /articles/123/users/messages?param=myParam
//     users.customGET("messages", {param: "myParam"})

//     var firstUser = users[0];

//     // GET /articles/123/users/456. Just in case we want to update one user :)
//     $scope.userFromServer = firstUser.get();

//     // ALL http methods are available :)
//     // HEAD /articles/123/users/456
//     firstUser.head()

//   });

// }, function errorCallback() {
//   alert("Oops error from server :(");
// })

// // Second way of creating Restangular object. URL and ID :)
// var article = Restangular.one("articles", 123);

// // GET /articles/123?single=true
// $scope.article = article.get({single: true});

// // POST /articles/123/messages?param=myParam with the body of name: "My Message"
// article.customPOST({name: "My Message"}, "messages", {param: "myParam"}, {})
