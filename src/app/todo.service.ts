import { Injectable } from '@angular/core';
import {Todos} from "./shared/todos";

@Injectable()
export class TodoService {
  todos: Todos[] = [];

  constructor() { }

  addTodo(todo: Todos) {
      this.todos.push(todo);
  }

  getTodos() {
      return this.todos;
  }

  deleteTodo(todo: Todos) {
    this.todos.splice(this.todos.indexOf(todo),1);
  }

  deleteAll() {
      this.todos.splice(0);
  }
}
