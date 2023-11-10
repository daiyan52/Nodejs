const os = require("os");
var totalmemory =os.totalmem();
var freemem =os.freemem;
console.log("Total_Memeory :: "+totalmemory);
console.log(`Total_free_Memory :: ${freemem}`);
console.log(typeof(totalmemory));