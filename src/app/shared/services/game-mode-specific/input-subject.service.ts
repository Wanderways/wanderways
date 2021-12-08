import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputSubjectService {

  private inputChange : Subject<string> = new Subject<string>();

  constructor() {}

  setInputValue(str : string){
    this.inputChange.next(str);
  }

  getInputChange(){
    return this.inputChange;
  }

  /**
   * Set the currents data to null
   */
  public clear() : void {
    this.setInputValue("");
  }
}
