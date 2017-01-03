app.controller('ReportController', function ($scope, $filter, EmployeeService) {
    $scope.EmployeeList = [];
    $scope.WorktimeList = [];
    $scope.EmployeeList = EmployeeService.GetEmployees();
    $scope.WorktimeList = EmployeeService.GetWorktimeList();
    $scope.EmployeeName = '';
    $scope.EmployeeLastName;
    $scope.selected = "";
    $scope.Months = { options: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]};

    //Get the employee name from the list
    $scope.GetEmployeeName = function (Id) {
        for (var i = 0; i < $scope.EmployeeList.length; i++) {
            if ($scope.EmployeeList[i].Id == Id) {
                $scope.EmployeeName = $scope.EmployeeList[i].Name;
                return $scope.EmployeeName;
            }
        }
        return $scope.EmployeeName;
    };

    //Get the employee lastName from the list
    $scope.GetEmployeeLastName = function (Id) {
        for (var i = 0; i < $scope.EmployeeList.length; i++)
            if ($scope.EmployeeList[i].Id == Id)
                $scope.EmployeeLastName = $scope.EmployeeList[i].LastName;
        return $scope.EmployeeLastName;
    };


   
    $scope.MonthFilter = function (item) {
        if ($scope.selected == "") {
            return true;
        }
        var tempDate = item.Date;
        var d = new Date(tempDate);
        month = d.getMonth();
        var comp = $scope.Months.options[month].localeCompare($scope.selected);
        if (comp == 0)
            return item;
        return false;

    }
});

