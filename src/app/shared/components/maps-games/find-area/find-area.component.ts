import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-find-area',
  templateUrl: './find-area.component.html',
  styleUrls: ['./find-area.component.scss']
})
export class FindAreaComponent implements OnInit {

  @Input() input_message : string = "";
  @Input() area_input : string = "";
  @Output() area_inputChange : EventEmitter<string> = new EventEmitter();
  value : any = '';

  constructor() { }

  ngOnInit(): void {
  }

  clearInput(){
    this.value = "";
  }

  inputChanged(e : string){
    this.area_inputChange.emit(e);
  }
}
