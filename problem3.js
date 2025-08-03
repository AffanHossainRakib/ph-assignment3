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
