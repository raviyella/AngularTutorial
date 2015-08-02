var app = angular.module("AddTodo", []);
app.controller("TodoController", function($scope, $http) {
    $scope.submit = function() {
        var todo = {
            'Text': $scope.TodoText,
            'DueDate': $scope.DueDate,
            'Priority': $scope.Priority
        };
        $http.post("http://localhost:24411/api/todo", todo).
        success(function(data, status, headers, config) {
            $scope.todos = data;
        }).
        error(function (data, status, headers, config) {
        alert(status);
    });
    }
});

