app.service('EmployeeService', [function () {

    var ArrEmployees = [{ Id: 31535, Name: 'Yehudit', LastName: 'Grinwald' },
                       { Id: 31536, Name: 'Tzipora', LastName: 'Green' },
                       { Id: 31537, Name: 'Shalva', LastName: 'Saar' }];

    var employeeList = JSON.stringify(ArrEmployees);
    localStorage.setItem('ArrEmployees', employeeList);
    var EmployeeName = '';

    var CheckIfExist = function (EmployeeID) {
        for (var i = 0; i < ArrEmployees.length; i++) {
            if (ArrEmployees[i].Id == EmployeeID) {
                EmployeeName = ArrEmployees[i].Name;
            }
        }
        if (EmployeeName == '')
            return false;
        return EmployeeName;

    }

    //Entry -when employee press entry- Add new item to the WorktimeList. 
    this.Add = function (EmployeeID, StartTime, DateEmp) {

        var check = CheckIfExist(EmployeeID);
        if (check == false)
            return 'ID does not exist'

        var Item = { EmployeeId: EmployeeID, StartTime: StartTime, EndTime: '', Date: DateEmp };
        var WorktimeList = JSON.parse(localStorage.getItem("ArrWorkTime"));
        if (WorktimeList == null)
            WorktimeList = [];
        WorktimeList.push(Item);//Update WorktimeList in localStorage.
        var WorkTimeList = JSON.stringify(WorktimeList);
        localStorage.setItem('ArrWorkTime', WorkTimeList);

        return 'Wellcome ' + EmployeeName;
    }

    var compDate = function (Date_1, Date_2) {
        var date1 = new Date(Date_1);
        var date2 = new Date(Date_2);
        if (date1.getYear() == date2.getYear() && date1.getMonth() == date2.getMonth() && date1.getDay() == date2.getDay())
            return true;
        return false;
    }

    //Exit when employee press exit, update the WorktimeList.
    this.Update = function (EmployeeID, ExitTime, DateEmp) {
        var check = CheckIfExist(EmployeeID);
        if (check == false)
            return 'ID does not exist'
        var WorktimeList = JSON.parse(localStorage.getItem("ArrWorkTime"));
        for (var i = 0; i < WorktimeList.length; i++) {
            //???
            if (WorktimeList[i].EmployeeId == EmployeeID && WorktimeList[i].EndTime == '')
                if (compDate(DateEmp, WorktimeList[i].Date) == true) {
                    WorktimeList[i].EndTime = ExitTime;
                    break;
                }
        }
       
    var WorkTimeList = JSON.stringify(WorktimeList);
        localStorage.setItem('ArrWorkTime', WorkTimeList);

        return 'Good bye ' + EmployeeName;


    }


    this.GetEmployees = function () {
        var employeeList = JSON.parse(localStorage.getItem("ArrEmployees"));
        return employeeList;
    }

    this.GetWorktimeList = function () {
        var WorktimeList = JSON.parse(localStorage.getItem("ArrWorkTime"));
        return WorktimeList;
    }




}]);



// Create Employee object





