import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { ITodo } from '../../modules/todo';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfiremComponent } from '../get-confirem/get-confirem.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

     @Input() getTodos !: Array<ITodo>
     @Output() emitRemoveid :EventEmitter<string>=new EventEmitter<string>()

     @Output() emitEditTodo : EventEmitter<ITodo>=new EventEmitter<ITodo>()

  constructor(
    private _matdialog: MatDialog
  ) { }

  ngOnInit(): void {
  }


onEditTodo(todo:ITodo){
console.log(todo);
this.emitEditTodo.emit(todo)

}

// onUpdate(){
//   let UpdateTodo={}
//   // this.emitUpdatedTodo(UpdateTodo)
// }


  // REMOVE
onRemove(id:string){

  // let getConfirm=confirm('Are you sure?')
  // if(getConfirm){
//     console.log(id);

//         let confirm=new MatDialogConfig()
//         confirm.width='300px',
//         confirm.disableClose=true
        

//        let matDialogRef= this._matdialog.open(GetConfiremComponent,confirm )
        
//        matDialogRef.afterClosed().subscribe(getConfrimation =>{
//         if(getConfrimation === true){
//           this.emitRemoveid.emit(id)

  
//  }
// })

    
  

  let getPassword = prompt('Enter Password');

  if(getPassword === '932291'){

    this.emitRemoveid.emit(id)

  }else{

    alert('Enter your Invalid  Password Plz try again')

  }

}
}
