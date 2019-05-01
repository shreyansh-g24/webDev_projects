// CLI application //

// declaring variables
const COMMANDS = ["man", "clear", "help", "date", "exit", "stats", "error"];
const commandsDescription = [
    {
        name: "man",
        des: "Short description for all commands"
    }, 
    {
        name: "clear",
        des: "Clears the console"
    }, 
    {
        name: "help",
        des: "Short description for all commands"
    }, 
    {
        name: "date",
        des: "Displays current date and time"
    }, 
    {
        name: "exit",
        des: "Exits the CLI"
    }, 
    {
        name: "stats",
        des: "Displays OS stats"
    }, 
    {
        name: "error",
        des: "Unidentified Command"
    }
];
const cli = {};

// importing modules
const READLINE = require("readline");
const EVENTS = require("events");
let em = new EVENTS.EventEmitter();

// creating terminal interface and adding event listeners
function createTerminalInterface(){
    let _rl = READLINE.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Enter help for more >> ",
    });
    // initial prompt and welcome display
    displayHeading("Welcome to CLI");
    _rl.prompt();
    // listening for input on terminal
    _rl.on("line", (input) => {
        processInput(input);
        _rl.prompt();
    });
}

// horizontal line
function displayHeading(text){
    let horizontalLine = "";
    let spaces = "";
    let terminalWidth = process.stdout.columns + 3;
    let textLength = text.length;
    let numOfSpaces = terminalWidth - textLength;
    if(numOfSpaces % 2 !== 0) numOfSpaces++;
    for(let i = 0; i < numOfSpaces/2; i++){
        horizontalLine += "==";
        spaces += " ";
    }
    // printing to console
    console.log(horizontalLine);
    console.log(spaces + text);
    console.log(horizontalLine);
    return 0;
}

// processing input
function processInput(inp){
    if(COMMANDS.includes(inp.toLowerCase())){
        // emiting event
        em.emit(inp.toLowerCase());
        return 0;
    }
    else{
        // emitting error
        em.emit("error");
        return 1;
    }
}

// adding listeners to the event emitter
// date
em.on("date", () => {
    let date = new Date();
    let dateString = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + "\n" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    // printing the result
    console.log("\n");
    displayHeading("DATE");
    console.log(dateString);    
    console.log("\n");
});

// clear
em.on("clear", () => {
    let terminalHeight = process.stdout.rows + 10;
    for(let i = 0; i < terminalHeight; i++){
        console.log();
    }
});

// man
em.on("man", () => {
    em.emit("help");
});

// help
em.on("help", () => {
    // terminal width
    let terminalWidth = process.stdout.columns + 3;

    // getting the longest word and it's length
    let longest = COMMANDS[0].length;
    for(let i = 1, n = COMMANDS.length; i < n; i++){
        if(COMMANDS[i].length > longest.len){
            longest = COMMANDS[i].length;
        }
    }
    
    longest += 2;

    // printing to console
    console.log("\n");
    displayHeading("HELP");
    for(let i = 0; i < COMMANDS.length; i++){
        let spaces = "";
        for(let j = 0, n = longest - COMMANDS[i].length; j < n; j++){
            spaces += " ";
        }
        console.log(COMMANDS[i] + spaces + ": " +  commandsDescription[i].des);
    }
    console.log("\n");
});

// exit
em.on("exit", () => {
    console.log("\n");
    console.log("Exiting program!");
    console.log("\n");
    process.exit(0);
});

// stats
em.on("stats", () => {
    const OS = require("os");
    let compStats = "";
    // building info
    // system uptime
    let uptimeStr = "System uptime: ";
    let uptime = OS.uptime();
    let temp = Math.floor(uptime/3600);
    uptimeStr += temp + ":";
    uptime -= temp * 60 * 60;
    temp = Math.floor(uptime/60);
    uptimeStr += temp + ":";
    uptime -= temp * 60;
    uptimeStr += uptime;

    // memory
    let freeMem = "Free Memory: " + OS.freemem();
    let totalMem = "Total Memory: " + OS.totalmem();

    // os
    let osType = "os type: " + OS.type();
    let osRelease = "os release: " + OS.release();

    // building output string
    compStats = osType + "\n" + osRelease + "\n" + freeMem + "\n" + totalMem + "\n" + uptimeStr;

    // printing the result
    console.log("\n");
    displayHeading("STATS");
    console.log(compStats);
    console.log("\n");
});

// error
em.on("error", () => {
    console.log("\n");
    console.log("Unidentified command!");
    console.log("\n");
});

// exporting functions
cli.init = createTerminalInterface;
module.exports = cli;
