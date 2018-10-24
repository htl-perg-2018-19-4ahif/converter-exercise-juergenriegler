let args = process.argv.slice(2);
if (args.length !== 4 || args[2] !== 'to' || isNaN(args[0])) err();
try {
    let r = require('convert-units')(args[0]).from(args[1]).to(args[3]);
    console.log(`${args[0]} ${args[1]} are ${r} ${args[3]}`);
} catch (ex) { err(); }
function err() { console.log("Invalid parameters"); process.exit(-1); }