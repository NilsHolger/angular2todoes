import { Component } from '@angular/core';
import { TodoesComponent } from './todoes/todoes.component';
import { TodoService } from './todo.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TodoesComponent],
  providers: [TodoService]
})
export class AppComponent {
  title = 'app works!';
}
