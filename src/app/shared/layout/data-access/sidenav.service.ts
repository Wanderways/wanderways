import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidenavService {


  get isDisplayed$() : Observable<boolean> {
    return this.displayed$.asObservable();
  }

  private displayed$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(window.innerWidth > 1024);

  constructor() { }

  toggleDisplayed(){
    this.displayed$.next(!this.displayed$.value);
  }
}
