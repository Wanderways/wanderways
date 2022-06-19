import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderDisplayService {

  private position$ = new BehaviorSubject<"sticky"|"relative"|"fixed">("sticky");

  constructor() { }

  public setPosition(position : "sticky"|"relative"|"fixed"): void {
    this.position$.next(position);
  }
  public getPosition(): Observable<"sticky"|"relative"|"fixed">{
    return this.position$;
  }
}
