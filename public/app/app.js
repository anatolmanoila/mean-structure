(function () {
	"use strict";

	angular.module('app', []);

	angular.module('app').controller('testCtrl', function ($scope) {
		$scope.jobs = [
			{title: 'Javascript Developer', description: 'Advanced knowledge of JS dev.'},
			{title: 'iOS Developer', description: 'Know Obj-C, adapt to Swift. The match applicant would have have in-depth experience with CoreAudio API'}
		];

	});
//    .config(['$routeProvider', '$locationProvider',  function ($routeProvider, $locationProvider) {
//      $routeProvider
//        .when('/', {
//          templateUrl:'',
//          controller:''
//        })
//        .otherwise('/', {});
//      //$locationProvider.html5Mode(true);
//    }]);
})();

