//initializing the request
var xmlhttp = new XMLHttpRequest();
var url = "http://sandbox.bittsdevelopment.com/code1/fetchemployees.php";


xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    //getting the response in objec
    let empl_obj = Object.values(JSON.parse(this.responseText));
    //calling the method to print the employees.
    var output = getEmployees(empl_obj);
    //employees object
    console.log(empl_obj);
    document.getElementById("employees").innerHTML = output;
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

//method to print the employees
function getEmployees(arr) {
    var out = "";
    for(let employee of arr) {
        // debugger
        console.log("printing the employee", employee.employeefname + " " + employee.employeelname)
        out += "<div class='employee'>";
        if (employee.employeeisfeatured == 1){
            out += "<span class='crown'>👑</span>";
        }
        out += "<div>";
        out += "<img class='employee_image' alt='image of " + employee.employeefname + " " + employee.employeelname + "'src='http://sandbox.bittsdevelopment.com/code1/employeepics/" + employee.employeeid + ".jpg'/></div>";
        out += "<div class='employee_name'>";
        out += employee.employeefname + ' ' + employee.employeelname;
        out += "</div>"
        out += "<div class='employee_bio'>";
        out += employee.employeebio;
        out += "</div>";
        //loop for iterating the role per employee
        for (let employeerole of employee.roles){
          out +="<span class='employee_role' style='background-color:" + employeerole.rolecolor + ";'>" + employeerole.rolename + "</span>";
        }
        out += "</div>";
    }
    return out;
}
