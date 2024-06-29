import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Example of using __dirname to access a file
const todoFilePath = path.join(__dirname, "todos.json");

export const readTodos = () => {
   try {
      const todosData = fs.readFileSync(todoFilePath, "utf-8");
      return JSON.parse(todosData);
   } catch (error) {
      if (error.code === "ENOENT") {
         console.error(`Todos file not found: ${todoFilePath}`);
         return [];
      } else {
         console.error(`Error reading todos: ${error.message}`);
         return [];
      }
   }
};

export const getTodos = (req, res) => {
   try {
      const todos = readTodos();
      res.send(todos);
   } catch (error) {
      throw new Error(`Error getting todos: ${error}`);
   }
};

export const createTodo = (req, res) => {
   try {
      const todo = req.body.todo;
      addTodo(todo);
      const todos = readTodos();

      res.send(todos);
   } catch (error) {
      throw new Error(`Error getting todos: ${error}`);
   }
};

export const addTodo = (newTodo) => {
   const todos = readTodos();
   todos.push(newTodo);
   const todosJson = JSON.stringify(todos, null, 2);
   fs.writeFileSync(todoFilePath, todosJson, "utf-8");
};
