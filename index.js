// IMPORT EXPRESS MODULE
import express from "express";
// EXPRESS 객체 생성
const app = express();
const PORT = 4000;

// Controller
const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);
const handleHome = (req, res) => res.send("HELLO from HOME!");
const handleProfile = (req, res) => res.send("You are in PROFILE!");

const betweenHome = (req, res, next) => {
    console.log("I'm between");
    next();
};

// MiddleWare
app.use(betweenHome);

// ROUTE
app.get("/", handleHome);
app.get("/profile", handleProfile);

// # Express 실행
app.listen(PORT, handleListening);
