/** Problem -01 ( Divide the Asset ) */
var area = 2060;
//write your code here
console.log(area / 2);

/** Problem -02 ( Cycle or Laptop ) */
var money = 9999;
//write your code here
if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 10000) {
  console.log("Cycle");
} else {
  console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here
for (var i = 1; i < lastDay + 1; i++) {
  if (i % 3) {
    console.log(`${i} - rest`);
  } else {
    console.log(`${i} - medicine`);
  }
}

/** Problem 04 - (Delete / Store) */
var fileName = "slipdf.txt";
//write your code here
var fileActualName = fileName.split(".")[0];
var extension = fileName.split(".")[1];
if (fileActualName[0] === "#" || extension === "pdf" || extension === "docx") {
  console.log("Store");
} else {
  console.log("Delete");
}

/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhankar", roll: 1014, department: "cse" };
//write your code here
console.log(`${student.name}${student.roll}.${student.department}@ph.ac.bd`);

/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 15000;
//write your code here
var finalSalary = startingSalary;
for (var i = 0; i < experience; i++) {
  finalSalary = finalSalary + finalSalary * 0.05;
}
console.log(finalSalary.toFixed(2));
