import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputSubjectService {

  content : string = "";

  private inputChange : Subject<string> = new Subject<string>();

  constructor() {
    this.inputChange.subscribe((value)=>{
      this.content = value;
    });
  }

  setInputValue(str : string){
    this.inputChange.next(str);
  }

  getInputChange(){
    return this.inputChange;
  }
}
