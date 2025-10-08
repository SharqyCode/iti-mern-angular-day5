import { AfterViewInit, Directive, DoCheck, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirLog]'
})
export class DirLog implements DoCheck {

  constructor(private element: ElementRef) {
    // if (localStorage.getItem('username') !== null) {
    //   this.element.nativeElement.innerHTML = 'Logout';
      
    //   //  link.innerHTML = "Logout"
    // } else
    }
    
    ngDoCheck(): void {
      if (localStorage.getItem('username') != null)
     this.element.nativeElement.innerHTML = 'Logout';
    else
      this.element.nativeElement.innerHTML = 'Login';
   }

  

}
