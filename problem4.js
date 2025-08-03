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
