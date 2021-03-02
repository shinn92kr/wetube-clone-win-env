// IMPORT EXPRESS MODULE
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";

// EXPRESS 객체 생성
const app = express();

// Middleware 1
// app.use(helmet());
app.use(function (req, res, next) {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org");
    return next();
});
// pug 사용 설정
app.set("view engine", "pug");
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(localsMiddleware);

// 글로벌 라우터
app.use(routes.home, globalRouter);
// 개별 라우터
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
