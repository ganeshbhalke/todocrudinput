import { Injectable } from "@angular/core";
// import { provideRouter } from "@angular/router";


@Injectable({

providedIn:'root',
})

export class uuidServices{

  uuid():string{
    return Date.now().toString()
  }
}