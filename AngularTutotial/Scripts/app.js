var TodoApp;

//(function () {
//    TodoApp = angular.module("TodoApp", ["bsTable"]);
//});

TodoApp = angular.module("TodoApp", ["ngRoute", "ngResource"]).
    config(function ($routeProvider) {
        $routeProvider.
            when('/', { controller: ListCtrl, templateUrl: 'list.html' }).
            when('/new', { controller: CreateCtrl, templateUrl: 'details.html' }).
            when('/edit/:editId', { controller: EditCtrl, templateUrl: 'details.html' }).
            otherwise({ redirectTo: '/' });
    });
//.directive('greet', function() {
//    return {
//        template: '<h2>Greetings from {{from}} to my dear {{to}}</h2>',
//        controller: function ($scope, $element, $attrs) {
//            $scope.from = $attrs.from;
//            $scope.to = $attrs.greet;
//        }
//    };
//});

TodoApp.factory('Todo', function ($resource) {
    return $resource('api/Todo/:id', { id: '@id' }, { update: { method: 'PUT' } });
});

//var ListCtrl = function ($scope, $location, Todo) {
//    $scope.items = Todo.query();
//}

var CreateCtrl = function ($scope, $location, Todo) {
    $scope.action = "Add";
    $scope.save = function() {
        Todo.save($scope.item, function() {
            $location.path('/');
        });
    };
};

var EditCtrl = function ($scope, $location, $routeParams, Todo) {
    $scope.action = "Update";
    var id = $routeParams.editId;
    $scope.item = Todo.get({ id: id });

    $scope.save = function() {
        Todo.update({id: id}, $scope.item, function() {
            $location.path('/');
        });

    };
};

var ListCtrl = function($scope, $location, Todo) {
    $scope.search = function() {
        Todo.query(
            {
                q: $scope.query,
                sort: $scope.sort_order,
                desc: $scope.is_desc,
                limit: $scope.limit,
                offset: $scope.offset

            },
            function(data) {
                var len = data.length;
                $scope.more = data.length === 20;
                $scope.items = $scope.items.concat(data);
            });
    };

    $scope.sort_by = function(ord) {

        if ($scope.sort_order === ord) {
            $scope.is_desc = !$scope.is_desc;
        } else {
            $scope.sort_order = ord;
            $scope.is_desc = false;
        }

        $scope.reset();
    };

    $scope.show_more = function() {
        $scope.offset = $scope.offset + $scope.limit;
        $scope.search();
    };

    $scope.has_more = function() {
        return $scope.more;
    };

    $scope.delete = function() {
        var id = this.item.TodoId;
        Todo.delete({ id: id }, function() {
            $('#item_' + id).fadeOut();
        });
    };

    $scope.sort_order = "Priority";
    $scope.is_desc = false;

    $scope.reset = function() {
        $scope.offset = 0;
        $scope.limit = 20;
        $scope.items = [];
        $scope.more = true;
        $scope.search();
    };

    $scope.reset();
};

//var ListCtrl = function ($scope, $location, Todo) {
//    $scope.RESET  = function () {
//        $scope.items = Todo.query({ Q: $scope.query });
//    };

//    $scope.RESET();
//}


