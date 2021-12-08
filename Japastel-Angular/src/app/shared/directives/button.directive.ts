import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.width = '225px';
  }

}
