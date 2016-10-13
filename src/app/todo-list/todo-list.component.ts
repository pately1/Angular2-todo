import { Component, OnInit } from '@angular/core';
import {Todos} from "../shared/todos";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {

  todos: Todos[] = [];
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  onDelete(todo: Todos) {
      this.todoService.deleteTodo(todo);
  }

  onDeleteAll() {
      this.todoService.deleteAll();
  }
}
