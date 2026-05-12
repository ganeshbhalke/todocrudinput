import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirem',
  templateUrl: './get-confirem.component.html',
  styleUrls: ['./get-confirem.component.scss']
})
export class GetConfiremComponent implements OnInit {
todoObj!: string

  
  constructor(
    private _matDialogRef : MatDialogRef<GetConfiremComponent>
  ) { }

  ngOnInit(): void {
  }

onClose(flag:boolean){
  
  this. _matDialogRef.close(flag)

 
}

// Close >> it will close the dialogbox
//it will send/emit msg to the component form witch we  have opened DialogBox

}
