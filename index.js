import express, { json, urlencoded } from "express";
import todoRoutes from "./routes/todo-routes.js";
import userRoutes from "./routes/user-routes.js";
import dotenv from "dotenv";

// Configure dotenv
dotenv.config();
const app = express();
app.set("view engine", "pug");

app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/", (_req, res) => {
   res.render("todoform.pug", { title: "Todo Form" });
});

// app.get('/', (req, res) => {
//     res.render('index'); // This assumes you have a Pug file named 'index.pug'
//   });

app.use("/api/todo", todoRoutes);
app.use("/api/user", userRoutes);

app.listen(process.env.PORT, () => {
   console.log(`Server has started on port: ${process.env.PORT}`);
});
