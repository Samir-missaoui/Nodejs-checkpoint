var fs = require("fs");

var file = process.argv[2];
var newline = fs.readFileSync(file).toString().split("\n").length - 1;
console.log(newline);
