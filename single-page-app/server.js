const express = require("express");
const path    = require("path");

const app = express();

app.use("/static", 
    express.static(path.resolve(__dirname, "frontend", "static")));
    
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 5000, () => {
    console.log("\n\x1B[1;33m --> Nodejs server is upp and running!\x1B[0m\n\x1B[1;34m   >> Open\x1B[0m \x1B[1;35mhttp://localhost:<PORT>\x1B[0m \x1B[1;34min your browser.\x1B[0m");
});
