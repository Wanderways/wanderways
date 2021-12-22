import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-start-scene',
  templateUrl: './start-scene.component.html',
  styleUrls: ['./start-scene.component.scss']
})
export class StartSceneComponent implements OnInit {

  @Output() startEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emmitStartEvent(){
    this.startEvent.emit();
  }

}
