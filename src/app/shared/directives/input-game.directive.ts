import { Directive } from '@angular/core';

@Directive({
  selector: '[appInputGame]'
})
export class InputGameDirective {
  inputGame : boolean = true;
}
