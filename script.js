(function(angular) {
  'use strict';
angular
.module('SimpleCountdownTimer', [])
  .controller('Controller',Controller);
  Controller.$inject= ['$scope'];
  function Controller($scope) {
    $scope.remainingTime=50;//give duration in seconds
  }
})(window.angular);
 
