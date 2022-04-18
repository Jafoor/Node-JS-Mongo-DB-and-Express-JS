// Global is almost Window of bwowser
const os = require("os");

console.log(os.cpus());
setTimeout(() => {
    console.log("printing from global")
}, 1000);