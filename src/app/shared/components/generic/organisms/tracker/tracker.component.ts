import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-tracker[currentValue][upperBound]',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {


  /**
   * The current value
   */
  @Input() currentValue : number = 0;
  /**
   * The upper bound
   */
  @Input() upperBound : number = 0;
	
	@Input() icon : string | undefined = undefined;
  
	@Input() color: ThemePalette = 'primary';
	readableTime : string = "";

  public isSmallDevice : boolean = false;

	ngOnInit(): void {
		this.onResize();
	}


	@HostListener('window:resize', ['$event'])
	onResize() {
	  	this.isSmallDevice = window.innerWidth <= 1024;
	}
  constructor() { }

}
