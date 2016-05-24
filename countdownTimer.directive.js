(function () {
    'use strict'; 
    angular
    .module('SimpleCountdownTimer')
 .directive('countDownTimer',countDownTimer);
 countDownTimer.$inject=['$interval'];
 function countDownTimer($interval) {
    return {
    restrict: 'EA',
    scope: {
      remainingTime: '=remainingTime'
    },
      link: link
    };
     function link(scope, element, attrs) {
   var timeoutId,seconds,minutes,hours,days;
    assignValues();
   function updateTime() {
      element.text(days+'Days '+hours+'Hours '+minutes+'Minutes '+seconds+'Seconds');
    }
    
   function assignValues() {
      seconds=scope.remainingTime;
        days=Math.floor(seconds/86400);
        seconds-=days*86400;
        hours= Math.floor(seconds/3600);
        seconds-=hours*3600;
        minutes=Math.floor(seconds/60); 
        seconds-=minutes*60;
      updateTime();
    }
     element.on('$destroy', function() {
      $interval.cancel(timeoutId);
    });

    timeoutId = $interval(function() {
        if(scope.remainingTime>0){
         scope.remainingTime--;
        assignValues();
        }
        else
        $interval.cancel(timeoutId);
    }, 1000);
  }
  }
})(window.angular);