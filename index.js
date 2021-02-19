// IMPORT EXPRESS MODULE
const express = require("express");
// EXPRESS 실행
const app = express();
const PORT = 4000;

function handleListening() {
    console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);
