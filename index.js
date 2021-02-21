// IMPORT EXPRESS MODULE
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

// EXPRESS 객체 생성
const app = express();
const PORT = 4000;

// Controller
const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);
const handleHome = (req, res) => res.send("HELLO from HOME!");
const handleProfile = (req, res) => res.send("You are in PROFILE!");

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(morgan("dev"));

// ROUTE
app.get("/", handleHome);
app.get("/profile", handleProfile);

// Express 실행
app.listen(PORT, handleListening);
