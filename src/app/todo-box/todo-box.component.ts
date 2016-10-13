import { Component, OnInit } from '@angular/core';

import { Todos } from "../shared/todos";
import { TodoService } from "../todo.service";

@Component({
  selector: 'app-todo-box',
  templateUrl: './todo-box.component.html',
  styleUrls: ['./todo-box.component.css']
})
export class TodoBoxComponent implements OnInit {
    todo: Todos;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  onAdd() {
      this.todoService.addTodo(this.todo);
      this.todo = '';
  }
}
