import express, { Router } from "express"
import taskRoutes from "./routes/taskroutes.js"
const app = express()
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Task Manager API is running!");
});

app.use("/tasks", taskRoutes);

const PORT = 3000 ;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});