const os = require("os");

const cpu = os.cpus();
console.log(cpu[0].model)