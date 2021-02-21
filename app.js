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

// EXPRESS 객체 생성
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(morgan("dev"));

// 글로벌 라우터
app.use(routes.home, globalRouter);
// 개별 라우터
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
