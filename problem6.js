/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var finalSalary = startingSalary;
for (var i = 0; i < experience; i++) {
  finalSalary = finalSalary + finalSalary * 0.05;
}
console.log(finalSalary.toFixed(2));
