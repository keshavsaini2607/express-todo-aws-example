const fs = require("fs");
const path = require("path");

const todoFilePath = path.join(__dirname, "todos.json");

const readTodos = () => {
    try {
        const todosData = fs.readFileSync(todoFilePath, 'utf-8');
        return JSON.parse(todosData);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error(`Todos file not found: ${todoFilePath}`);
            return [];
        } else {
            console.error(`Error reading todos: ${error.message}`);
            return [];
        }
    }
};

const getTodos = (req, res) => {
   try {
      const todos = readTodos();
      res.send(todos);
   } catch (error) {
      throw new Error(`Error getting todos: ${error}`);
   }
};

const createTodo = (req, res) => {
   try {
      const todo = req.body.todo;
      addTodo(todo);
      const todos = readTodos();

      res.send(todos);
   } catch (error) {
      throw new Error(`Error getting todos: ${error}`);
   }
};

const addTodo = (newTodo) => {
    const todos = readTodos();
    todos.push(newTodo);
    const todosJson = JSON.stringify(todos, null, 2);
    fs.writeFileSync(todoFilePath, todosJson, 'utf-8');
}

module.exports = { getTodos, createTodo ,addTodo};
