import { Component, signal } from '@angular/core';
import { Todos } from './todos/todos';

@Component({
  selector: 'app-root',
  imports: [Todos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Esercitaziopne 1');
}
