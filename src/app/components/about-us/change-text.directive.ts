import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {

  constructor(private elRef:ElementRef) { 
    elRef.nativeElement.innerText = "Custom Directive";
  }

}
