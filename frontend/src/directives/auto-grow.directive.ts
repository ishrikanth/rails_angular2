import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
  selector: '[autoGrow]',
  host: {
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()'
  }
})

export class AutoGrowDirective {
  constructor(private el: ElementRef,
    private renderer: Renderer) {
  }
  onFocus() {
    console.log(this.el);
    this.renderer.setElementStyle(this.el, 'width', '200px');
  }
  onBlur() {
   this.renderer.setElementStyle(this.el, 'width', '100px');
  }

}
