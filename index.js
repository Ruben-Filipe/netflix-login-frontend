var liveServer = require("live-server");

var params = {
    port: 3000,
    host: "localhost",
    file: "index.html",
    open: process.env.DEV ? true : false
};

liveServer.start(params);   