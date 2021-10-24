import { Component, Input, OnInit, Output,EventEmitter, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-find-area',
  templateUrl: './find-area.component.html',
  styleUrls: ['./find-area.component.scss']
})
export class FindAreaComponent implements OnInit {

  @Input() input_message : string = "";
  @Input() area_input : string = "";
  // @Input() area_node_to_color : HTMLElement | null = null;
  @Output() area_inputChange : EventEmitter<string> = new EventEmitter();
  value : any = '';

  private _area_node_to_color : HTMLElement = document.createElement('div');
  @Input() 
    public set area_node_to_color(area_node_to_color : HTMLElement) {
      this._area_node_to_color = area_node_to_color; // On met à jour la node à colorer
      this.colorArea(this._area_node_to_color) // On colore la node
      this._area_node_to_color = area_node_to_color; // On remet la node à zéro
    };

  constructor() { }


  ngOnInit(): void {
  }

  clearInput(){
    this.value = "";
  }

  inputChanged(e : string){
    this.area_inputChange.emit(e);
  }

  /**
   * Permet de colorer une area donné.
   * @param area : Une area à colorer.
   */
  colorArea(area : HTMLElement | null){
    area!.style.fill = "red";
    this.clearInput();
    if(typeof(area) == typeof(HTMLElement) ){
      area!.style.fill = "red";
    }
  }
}
