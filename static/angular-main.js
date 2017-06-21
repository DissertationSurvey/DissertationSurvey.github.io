angular.module('surveysite', ['ngRoute'])

    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        
        $locationProvider.html5Mode({enabled: true, requireBase: false});
    }])

    .controller('survey1Ctrl', ['$scope', '$routeParams', '$location', function ($scope, $routeParams, $location) {
        var testType = $location.search().type;
        
        $scope.testData;
        
        $scope.goldenData = 
        [
            {
                option1 : "test1option1",
                option2 : "test1option2", 
                option3 : "test1option3",
                option4 : "test1option4"
            },
            {
                option1 : "test2option1",
                option2 : "test2option2", 
                option3 : "test2option3",
                option4 : "test2option4"
            },
            {
                option1 : "test3option1",
                option2 : "test3option2", 
                option3 : "test3option3",
                option4 : "test3option4"
            },
            {
                option1 : "test4option1",
                option2 : "test4option2", 
                option3 : "test4option3",
                option4 : "test4option4"
            }
        ]
        
        if (testType == 1) {
            $scope.testData = $scope.goldenData[0];
        } else if (testType == 2) {
            $scope.testData = $scope.goldenData[1];
        } else if (testType == 3) {
            $scope.testData = $scope.goldenData[2];
        } else if(testType == 4) {
                $scope.testData = $scope.goldenData[3];
        } else {
            $scope.testData = $scope.goldenData[0];
        }
        
        
        $scope.goToNextSection = function() {
            // evaluate first buttons then
            $scope.finishFirst = true;
        }
        
        

        

    }]);
