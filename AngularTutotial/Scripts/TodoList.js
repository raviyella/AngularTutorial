var app = angular.module("TodoListApp", []);
app.controller("TodoController", function($scope, $http) {
    $http.get('http://localhost:24411/api/todo').
        success(function(data, status, headers, config) {
            $scope.todos = data;
        }).
        error(function (data, status, headers, config) {
            alert(status);
        });
});