import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ITodo } from '../../modules/todo';
import { uuidServices } from '../../services/uuid.services';

@Component({
  selector: 'app-todo-from',
  templateUrl: './todo-from.component.html',
  styleUrls: ['./todo-from.component.scss']
})
export class TodoFromComponent implements OnInit,OnChanges {

isInEditMode:boolean=false

@ViewChild ('todoItem') todoItem!:ElementRef
@ViewChild ('iscomplated') iscomplated!:ElementRef

@Input()getEditobj!:ITodo
@Output() emitNewTodo : EventEmitter <ITodo> = new EventEmitter<ITodo>()
@Output() emitUpdatedTodo:EventEmitter<ITodo>=new EventEmitter<ITodo>()

//services ka instance component me inject karte hai = Dependuncy Injection
  constructor(
    private _uuidServices:uuidServices  //instance create kiya 
  ) {}

  //Edit
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(!!changes['getEditobj'].currentValue){
       this.isInEditMode=true
       this.todoItem.nativeElement.value=this.getEditobj.todoItem
       this.iscomplated.nativeElement.value=this.getEditobj.iscomplated 
    }
    
  }



  ngOnInit(): void {
    // console.log(this.getEditobj);
    
  }
  onTodoAdd(){
    let New_Todo : ITodo ={
     todoItem:this.todoItem.nativeElement.value,
     iscomplated:this.iscomplated.nativeElement.value == 'true'? true :false,
     todoId:this._uuidServices.uuid()
    }

    this.todoItem.nativeElement.value=''
    this.iscomplated.nativeElement.value= 'true'
    this.emitNewTodo.emit(New_Todo)



    console.log(New_Todo);
    
  }

  onUpdate(){
    let UPDATE_OBJ :ITodo={
     todoItem:this.todoItem.nativeElement.value,
     iscomplated:this.iscomplated.nativeElement.value,
     todoId:this.getEditobj.todoId
    }

    this.emitUpdatedTodo.emit(UPDATE_OBJ)
    this.todoItem.nativeElement.value=''
    this.iscomplated.nativeElement.value=''
    this.isInEditMode=false
  }
}
