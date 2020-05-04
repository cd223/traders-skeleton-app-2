import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[bgColor]'
})
export class InputBoxDirective implements OnInit {

  @Input('bgColor') defaultColor: string

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.defaultColor = this.defaultColor ? this.defaultColor : 'yellow'
    this.setBgColor(this.defaultColor)
  }

  setBgColor(color: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', color)
  }

  @HostListener('focus') onFocus() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'cyan')
  }

  @HostListener('blur') onBlur() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'green')
  }
}
