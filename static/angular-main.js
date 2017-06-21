angular.module('surveysite', ['ngRoute'])

    .controller('survey1Ctrl', ['$scope', '$routeParams', '$location', function ($scope, $routeParams, $location) {
        
        var testType = $routeParams.type;
        console.log($routeParams);
        console.log(testType);
        
        var testType2 = $location.search();
        console.log(testType2);
        
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
        console.log($scope.testData);
        
        
        $scope.$digest;
        
        
    
        

        

    }]);
