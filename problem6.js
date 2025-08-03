/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 15000;
//write your code here
var finalSalary = startingSalary;
for (var j = 0; j < experience; j++) {
  finalSalary = finalSalary + finalSalary * 0.05;
}
console.log(finalSalary.toFixed(2));
