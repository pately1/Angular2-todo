import {Component, OnInit} from '@angular/core';
import {Todos} from "./shared/todos";
import {TodoService} from "./todo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  todos: Todos[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
      this.todos = this.todoService.getTodos();
  }
}
