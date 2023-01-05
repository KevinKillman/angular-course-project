import { Directive, ElementRef, HostListener, OnInit, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  //binds directly to the css class open, replaces commented else if in toggle open
  @HostBinding('class.open') opened: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  @HostListener('click') toggleOpen(eventData: Event) {
    // if (this.opened) {
    //   this.renderer.removeClass(this.elRef.nativeElement, 'open')
    // } else {
    //   this.renderer.addClass(this.elRef.nativeElement, 'open');
    // }
    this.opened = !this.opened
  }

}
