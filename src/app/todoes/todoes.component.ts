import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
@Component({
  moduleId: module.id,
  selector: 'app-todoes',
  templateUrl: 'todoes.component.html',
  styleUrls: ['todoes.component.css']
})
export class TodoesComponent implements OnInit {
    private todoes:any;
    private text:string;
    private appState:string = 'default';
    private oldText:string;

  constructor(private _todoService: TodoService) {
   }
  ngOnInit() {
    this.todoes = this._todoService.getTodos();
    console.log(this.appState);
  }
  addTodo(){
    var newTodo = {
      text: this.text
    }
    this.todoes.push(newTodo);
    this._todoService.addTodo(newTodo);
  }
  editTodo(todo){
    this.appState = 'edit';
    this.oldText = todo.text;
    this.text = todo.text;
  }
  updateTodo(){
    console.log(this.text);
    for(let i = 0; i < this.todoes.length; i++){
        if (this.todoes[i].text === this.oldText){
          this.todoes[i].text = this.text;
        }
      }
      this._todoService.updateTodo(this.oldText, this.text);
  }
  deleteTodo(todoText){
      for(let i = 0; i < this.todoes.length; i++){
        if (this.todoes[i].text === todoText){
          this.todoes.splice(i,1);
        }
      }
      this._todoService.deleteTodo(todoText);
  }

}
