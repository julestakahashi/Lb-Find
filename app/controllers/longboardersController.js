
    var LongboardersController = function LongboardersController($scope) {
        $scope.longboarders = [
            {"username": 'Dick Buttkiss', "location": 'Portland, OR', "age": 99, "discipline": ['downhill', 'dance']},
            {
                "username": 'Peter Boneween',
                "location": 'San Francisco, CA',
                "age": 700,
                "discipline": ['freeride', 'dance']
            },
            {
                "username": 'Zeus Booger',
                "location": 'Seattle, Washington',
                "age": 1,
                "discipline": ['freeride', 'downhill']
            },
            {"username": 'John Doe', "location": 'Dallas, Texas', "age": 30, "discipline": ['cruising']},
            {"username": 'Lady Bum', "location": 'New York, New York', "age": 90, "discipline": ['downhill']},
            {"username": 'Hobo Jenkins', "location": 'Miami, Florida', "age": 89, "discipline": ['downhill', 'dance']},
            {"username": 'Dirk Zaster', "location": 'Atlanta, Georgia', "age": 76, "discipline": ['downhill']},
            {
                "username": 'Stink Goblin',
                "location": 'Baton Rouge, Louisiana',
                "age": 3,
                "discipline": ['downhill', 'freeride']
            },
            {
                "username": 'Glerbenflerk klinkerblinki',
                "location": 'Chicago, Illinois',
                "age": 9007,
                "discipline": ['freestyle', 'freeride']
            },
            {"username": 'wenus gobble', "location": 'San Mateo, California', "age": 24, "discipline": ['dance']},
            {"username": 'captain fartbucket', "location": 'Anchorage, Alaska', "age": 9021, "discipline": ['dance']}
        ];
    };

    LongboardersController.$inject = ['$scope'];

    angular.module('longboardersApp')
        .controller('LongboardersController', LongboardersController);


