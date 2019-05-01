// launching the application //

// importing modules
const SERVER = require("./server.js");
const CLI = require("./cli.js");

// init function
const cliApp = {};
cliApp.init = () => {
    // initialising the server
    SERVER.init();
    // initialising cli
    setTimeout(() => {
        CLI.init();
    }, 100);
};

// function call
cliApp.init();
