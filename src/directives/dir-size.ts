import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirSize]'
})
export class DirSize {

  constructor(private element: ElementRef) {
  }

  @HostListener('mouseover') func() {
    let ele = this.element.nativeElement as HTMLElement;
    ele.classList.add("changing")
  }
  
  @HostListener('mouseleave') func2() {
    let ele = this.element.nativeElement as HTMLElement;
    ele.classList.remove("changing")
  }
}

