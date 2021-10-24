import { Component, Input, OnInit, Output,EventEmitter, SimpleChanges} from '@angular/core';
import { DataSubjectService } from 'src/app/shared/services/utilitary/data-subject.service';
import { InputSubjectService } from 'src/app/shared/services/utilitary/input-subject.service';
import { NodeSubjectService } from 'src/app/shared/services/utilitary/node-subject.service';
@Component({
  selector: 'app-find-area',
  templateUrl: './find-area.component.html',
  styleUrls: ['./find-area.component.scss']
})
export class FindAreaComponent implements OnInit {

  @Input() input_message : string = "";
  @Input() fill_color : string = "";
  @Input() area_input : string = "";
  // @Input() area_node_to_color : HTMLElement | null = null;
  @Output() area_inputChange : EventEmitter<string> = new EventEmitter();
  value : any = '';

  constructor(private inputSubjectService :InputSubjectService,
	private nodeSubjectService : NodeSubjectService,
	private dataSubjectService : DataSubjectService) {}


  ngOnInit(){
    this.nodeSubjectService.nodeChange.subscribe((value)=>{
      console.log(value)
      this.colorArea(value);
    });
}

  clearInput(){
    this.value = "";
  }

  inputChanged(e : string){
    this.inputSubjectService.setInputValue(e);
    // this.area_inputChange.emit(e);
  }

  /**
   * Permet de colorer une area donné.
   * @param area : Une area à colorer.
   */
  colorArea(area : HTMLElement){
      this.clearInput();
      area!.style.fill = this.fill_color;
  }
}
