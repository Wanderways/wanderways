import { Directive } from '@angular/core';

@Directive({
  selector: '[appDepartementsFrancais]'
})
export class DepartementsFrancaisDirective {

  departementsFrancais : boolean = true;

}
