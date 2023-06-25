import Router from "express";
import cookieController from "./features/cookie/controller.js";
import attendanceController from "./features/attendance/controller.js";
const v1Router = new Router();

v1Router.get("/cookie", cookieController);
v1Router.get("/attendance", attendanceController);

export default v1Router;
