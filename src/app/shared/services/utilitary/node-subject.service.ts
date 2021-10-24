import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeSubjectService {

  content : HTMLElement = document.createElement("div");

  nodeChange : Subject<HTMLElement> = new Subject<HTMLElement>();

  constructor() {
      this.nodeChange.subscribe((value) => {
        this.content = value;
    });
  }

  setNodeValue(htmlElement : HTMLElement){
    this.nodeChange.next(htmlElement);
  }
}
