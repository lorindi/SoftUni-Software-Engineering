import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  Optional,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appMyStructural]',
  exportAs: 'appMyStructural',
})
export class MyStructuralDirective implements OnChanges {
  @Input() appMyStructural: boolean = false;
  @Input() myTmpRef: TemplateRef<any> | undefined;

  constructor(
    @Optional() private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('onChanges', this.appMyStructural);
    console.log('myTmpRef', this.myTmpRef);
    console.log('templateRef', this.templateRef);

    const template = this.templateRef || this.myTmpRef;

    if (this.appMyStructural) {
      this.vcRef.createEmbeddedView(
        template,
        // context
        {
          myCustomValue: 'This is my custom message!',
          myNum: 123,
          $implicit: 'Default value',
        }
      );
    } else {
      this.vcRef.clear();
    }
  }
}
