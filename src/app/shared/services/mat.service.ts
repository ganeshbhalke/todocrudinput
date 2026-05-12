import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";


@Injectable({
    providedIn:'root',
})
export class SnackBarService{  //costum snackbar service

    constructor(
         private _snackBar :MatSnackBar // ek services me dusre service ko inject kiya 
         ){}


       openSnackBar(msg:string){
        this._snackBar.open(msg,`Close`,{
            horizontalPosition:'left',
            verticalPosition:'top',
            duration:3000
        })
       }  

}