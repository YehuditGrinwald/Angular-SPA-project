app.controller('DateTimeUpdateController', function ($scope, $log, EmployeeService) {
    $scope.message = '';
    $scope.EmployeeID = '';
    $scope.EmployeeDate;

    //Update the employe's entry time with the date and time input.
    $scope.UpdateEntryTime = function () {
        $scope.message = EmployeeService.Add($scope.EmployeeID, $scope.mytime, $scope.dt);
    };


    //Update the employe's exit time with the date and time input.
    $scope.UpdateExitTime = function () {
        $scope.message = EmployeeService.Update($scope.EmployeeID, $scope.mytime, $scope.dt);
    };



 //////////////////////time picker///////////////////

    $scope.mytime = new Date();
    $scope.hstep = 1;
    $scope.mstep = 1;

    $scope.options = {
        hstep: [1, 2, 3],
        mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = true;
    $scope.toggleMode = function () {
        $scope.ismeridian = !$scope.ismeridian;
    };

    $scope.changed = function () {

        $log.log('Time changed to: ' + $scope.mytime);
    };

    $scope.clear = function () {
        $scope.mytime = null;
        $scope.dt = null;
    };

    //////date picker/////////////

    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();



    $scope.options = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
    };

    // Disable weekend selection
    function disabled(data) {
        var date = data.date,
          mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    $scope.toggleMin = function () {
        $scope.options.minDate = $scope.options.minDate ? null : new Date();
    };

    $scope.toggleMin();

    $scope.setDate = function (year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date(tomorrow);
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [
      {
          date: tomorrow,
          status: 'full'
      },
      {
          date: afterTomorrow,
          status: 'partially'
      }
    ];

    function getDayClass(data) {
        var date = data.date,
          mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    }

});