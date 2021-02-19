// IMPORT EXPRESS MODULE
const express = require("express");
// EXPRESS 실행
const app = express();
const PORT = 4000;

function handleListening() {
    console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
    console.log("Hi from HOME!");
    console.log(req);
    res.send("HELLO FROM HOME!!");
}
function handleProfile(req, res) {
    res.send("You are in PROFILE!");
}

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
