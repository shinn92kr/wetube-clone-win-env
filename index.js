// IMPORT EXPRESS MODULE
import express from "express";
// EXPRESS 실행
const app = express();
const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);
const handleHome = (req, res) => res.send("HELLO from HOME!");
const handleProfile = (req, res) => res.send("You are in PROFILE!");

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
