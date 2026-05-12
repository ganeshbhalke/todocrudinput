import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from '../../modules/todo';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarService } from '../../services/mat.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {


  
  editTodoobj!:ITodo

todoArr: Array<ITodo> = [
  {
    todoItem: 'Js',
    todoId: '123',
    iscomplated:true
  },
  {
    todoItem: 'TS',
    todoId: '124',
    iscomplated:false
  },
  {
    todoItem: 'Angular',
    todoId: '125',
    iscomplated:true
  }
];

  constructor(
    private _snackBar :SnackBarService /// coustom service inject kiya 
   // private _snackBar :MatSnackBar // service ka instans  component me inject kiya  
  ) { }

  ngOnInit(): void {
  }

  getNewTodo(todo:ITodo){
    this.todoArr.push(todo)

this._snackBar.openSnackBar(`The new todo ${todo.todoItem} Added Successfull !!`)
      // this._snackBar.open(` The new todo ${todo.todoItem} Added SuccessFully !!`,'close',{
      //   horizontalPosition:'left',
      //   verticalPosition:'top',
      //   duration:3000
      // })

  }

    


  getEditTodo(editTodo:ITodo){
    console.log(editTodo);
    this.editTodoobj=editTodo;
    
  }


  getUpdateTodo(updatedTodo:ITodo){
    let getIndex=this.todoArr.findIndex(n => n.todoId === updatedTodo.todoId)
    this.todoArr[getIndex]=updatedTodo

    

    this._snackBar.openSnackBar('The todo Item Updated Successfully!!!')
  }

  getRemoveId(id:string){
    let GET_INDEX=this.todoArr.findIndex(n => n.todoId === id)
  let RemoveId=this.todoArr.splice(GET_INDEX,1)

  this._snackBar.openSnackBar(`The todo Item ${RemoveId[0].todoItem} Removeed Successfull !!!`)
  }


}


