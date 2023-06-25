import express from "express";
import v1Router from "./routes.js";

const app = express();

app.use(express.json());
app.use("/api/v1", v1Router);

app.listen(5555, () => {
  console.log("server is listening on port 5555");
});
