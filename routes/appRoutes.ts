import { Router } from "express";
import Todo from "../src/app";
import TodoI from "./types";
const router = Router()


const todos: TodoI[] = []; //fake todos store

router.get('/', (_, res) => {
  res.json(todos)
})

router.post('/', (req, res) => {
  const { task } = req.body as TodoI;
  const todo = new Todo(task)
  todos.push(todo)
  res.status(201).json(todos)
})










export default router;