import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapIndexEntry } from '../services/map-index-loader/interfaces/map-index-entry.interface';
import { MapIndexLoaderService } from '../services/map-index-loader/map-index-loader.service';
import { MapSvgLoaderService } from '../services/map-svg-loader/map-svg-loader.service';
import { MapSvg } from '../services/map-svg-loader/maps_svg.interface';

@Component({
  selector: 'app-map-generic',
  templateUrl: './map-generic.component.html',
  styleUrls: ['./map-generic.component.scss']
})
export class MapGenericComponent implements OnInit {
  @Input('colorSubdivision') colorSubdivision : boolean = false;

  @ViewChild('mapRef') mapRef : ElementRef<SVGSVGElement> | undefined;
  @ViewChild('groupRef') groupRef : ElementRef<SVGGElement> | undefined;
  
  loadedMap : MapSvg | undefined = undefined;

  currentSelectedNode : HTMLElement | undefined = undefined;

  mouseStates = {
    isPanned :false,
    isClickDown : false
  }

  currentSelectedArea : string = "";
  private scale : number = 1;
  private currentMatrix! : DOMMatrix;

  currentView = {
    originX :0,
    originY:0,
    width:0,
    height:0
  }


  constructor(private route: ActivatedRoute, private mapIndexLoader : MapIndexLoaderService, private mapSvgLoaderService : MapSvgLoaderService) {}

  /**
   * On init, loads maps svg and related data
   * @TODO Make it catch error and allow "try reload" function
   */
  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParameter =>{
      if(!queryParameter)return; // If there is no value then skip

      this.mapIndexLoader.getEntryIfExists(queryParameter["map"]).then( (mapIndexEntry : MapIndexEntry | undefined) =>{
        if(!mapIndexEntry)return; // If no data found then skip
        this.loadMapSvg(mapIndexEntry);
      });
    })
  }

  /**
   * Loads the svg for a given map
   * @param mapIndexEntry The map index entry corresponding to the wanted svg
   */
  private loadMapSvg(mapIndexEntry : MapIndexEntry){
    this.mapSvgLoaderService.getMapSvg(mapIndexEntry.relatedSvg).subscribe(svg =>{
      this.loadedMap = svg;
      this.currentView.width = svg.viewBox.width;
      this.currentView.height = svg.viewBox.height;
    });
  }

  /**
   * Function only for testing purpose
   * @TODO DELETE THIS
   * @param yeah String to log
   */
  areaClick(event : MouseEvent){
    if(!(<HTMLElement>event.target).classList.contains('land'))return;

    Array.from(document.getElementsByClassName("selected")).forEach(e=>{
      (<HTMLElement>e).classList.remove('selected');
    })
    this.currentSelectedNode = (<HTMLElement>event.target);
    this.currentSelectedNode.classList.add('selected')

    if(true){
      Array.from(document.getElementsByClassName("subdivision-selected")).forEach(e=>{
        (<HTMLElement>e).classList.remove('subdivision-selected');
      })
      this.currentSelectedArea = this.currentSelectedNode.classList[0];
      this.colorAreas(this.currentSelectedArea);
    }
    
  }

  private colorAreas(className : string){
    let elements : HTMLCollectionOf<Element> = document.getElementsByClassName(className);
    Array.from(elements).forEach(e=>{
      if(this.currentSelectedNode!.id !== (<HTMLElement>e).id){
        (<HTMLElement>e).classList.add("subdivision-selected");
      }
    })
  }

  
  pointerDown(event : MouseEvent){
    this.mouseStates.isClickDown = true;
  }
  pointerUp(event : MouseEvent){
    this.mouseStates.isClickDown = false;
    this.mouseStates.isPanned = false;
  }
  pointerMove(mouseMove : MouseEvent){
    // console.log(mouseMove);
    
    if (this.mouseStates.isClickDown){
      this.mouseStates.isPanned = true;
      this.pan(mouseMove.movementX,mouseMove.movementY)
    }
  }

  private getPointFromEvent (event : TouchEvent|MouseEvent ) : {x:number, y:number} {
    var point = {x:0, y:0};
    // If even is triggered by a touch event, we get the position of the first finger
    if ((<TouchEvent>event).targetTouches) {
      event = <TouchEvent>event;
      point.x = event.targetTouches[0].clientX;
      point.y = event.targetTouches[0].clientY;
    } else {
      event = <MouseEvent>event;
      point.x = event.clientX;
      point.y = event.clientY;
    }
    
    return point;
  }

  pan(dx : number, dy : number) {
    // this.transformMatrix[4] += dx;
    // this.transformMatrix[5] += dy;
              
    // this.applyOnMatrix(this.transformMatrix);
  }


  /**
   * Scalling with the wheel
   * @param event 
   */
  wheelEvent(event : WheelEvent){
    let coordinates =  {
      x: event.x - this.mapRef!.nativeElement.parentElement!.offsetLeft,
      y: event.y - this.mapRef!.nativeElement.parentElement!.offsetTop
    };
    this.zoom(event.deltaY>0?-0.2:0.2, coordinates);
  }
  /**
   * Scalling down
   */
  scaleDown(){
    this.zoom(-0.2, {x:this.loadedMap!.viewBox.width/2,y:this.loadedMap!.viewBox.height/2});
  }
  /**
   * Scalling up
   */
   scaleUp(){
    this.zoom(0.2, {x:this.loadedMap!.viewBox.width/2,y:this.loadedMap!.viewBox.height/2});
  }

  zoom(delta : number, coordinates : {x:number,y:number}){

    coordinates.x = coordinates.x * this.loadedMap!.viewBox.width / this.mapRef!.nativeElement.parentElement!.offsetWidth;
    coordinates.y = coordinates.y * this.loadedMap!.viewBox.height / this.mapRef!.nativeElement.parentElement!.offsetHeight;
    let svgPoint = this.mapRef!.nativeElement.createSVGPoint();
    svgPoint.x = coordinates.x;
    svgPoint.y = coordinates.y;
    if(this.currentMatrix){
      console.log(svgPoint);
      svgPoint = svgPoint.matrixTransform(this.currentMatrix.inverse())
      console.log(svgPoint);
    }
    this.currentMatrix = this.mapRef!.nativeElement.createSVGMatrix().translate(-svgPoint.x,-svgPoint.y);
    svgPoint.matrixTransform(this.currentMatrix)
    
    this.applyOnMatrix(this.groupRef!.nativeElement,this.currentMatrix);
  }

  applyOnMatrix(element : SVGGElement , matrix : DOMMatrix){
    var m = matrix;
    var s = "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + m.e + "," + m.f + ")";
    
    element.setAttributeNS(null, "transform", s);
  }
}
