import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appIcon]'
})
export class IconDirective {

  constructor(el: ElementRef) { 
    el.nativeElement.style.width = '23px';
  }

}
