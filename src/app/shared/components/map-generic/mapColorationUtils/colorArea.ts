import { AreaStatus } from "./AreaStatus.enum";

export function colorArea(areaId : string, areaStatus : AreaStatus){
  document.getElementById(areaId)!.classList.add(areaStatus);
}
