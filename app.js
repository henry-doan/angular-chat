var app = angular.module('app', ['ui.bootstrap']);

app.controller('myCtrl', ['$scope', function($scope){
	$scope.submit = function(){
		$scope.messages.push($scope.newPost);
		$scope.newPost = {};
	};

	$scope.messages = [
		{
			author: 'red',
			body: 'This is some filler text. Text text text.'
		}
	];
}])
app.controller('AlertDemoCtrl', function ($scope) {
	$scope.alerts = [
    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
  ];

  $scope.addAlert = function() {
    $scope.alerts.push({msg: 'Another alert!'});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

});
