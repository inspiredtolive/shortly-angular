angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links, Auth) {
  // Your code here
  // if (!Auth.isAuth()) {
  //   $location.url('/signin');
  // }
  $scope.data = {
    links: []
  };
  Links.getAll().then(function(results) {
    $scope.data.links = results;
  });

  $scope.logout = function () {
    delete localStorage['com.shortly'];
  };
});
