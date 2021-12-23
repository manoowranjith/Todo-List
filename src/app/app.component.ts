import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'todo-list';
  list:string="";
  todoList:Array<string>=[]

  addItems()
  {
    this.todoList.unshift(this.list)
    this.list=""
  }
  removeItems(list:string)
  {
    const index = this.todoList.indexOf(list);
    this.todoList.splice(index, 1);
  }
}
