import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appRedify]'
})
export class RedifyDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color = 'blue';
  }

}
