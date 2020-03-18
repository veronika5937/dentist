import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-svg',
  styles: [`svg {fill: currentColor}`],
  template: `
    <svg [attr.width]="width" [attr.height]="height">
      <use attr.xlink:href="assets/symbol-defs.svg#{{icon}}"></use>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgComponent {
  @Input() width = 20;
  @Input() height = 20;
  @Input() icon: string;
}
