import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from './Todo';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [MatCheckboxModule, NgClass, FormsModule],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos {
  todos: Todo[] = [
  {
  id: 1,
  title: 'Studiare Angular',
  completed: false,
  },
  {
  id: 2,
  title: 'Fare la spesa',
  completed: false,
  },
  {
  id: 3,
  title: 'Portare fuori il cane',
  completed: false,
  }
  ];
  toggleCompleted(todo: Todo): void {
  todo.completed = !todo.completed;
  }
  getClass(todo: Todo): string {
  return todo.completed ? 'completed' : '';
  }
  deleteItem(todo: Todo): void {
  this.todos = this.todos.filter(
    (objetItem: Todo): boolean => objetItem !== todo
    );
  }
  enableEdit(todo: Todo): void {
  todo.edited = true;
  }
  saveEdit(todo: Todo): void {
    todo.edited = false;
  }
}
