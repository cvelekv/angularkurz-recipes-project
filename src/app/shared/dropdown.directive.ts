import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: "[appDropdown]"
})
export class DropDownDirective {
  @HostBinding("class.open") isOpen = false;
  @HostListener("click")
  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
}
