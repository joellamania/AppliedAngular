import {
  Component,
  ChangeDetectionStrategy,
  input,
  output,
} from '@angular/core';
import { NaviLinkModel } from '../types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <a (click)="navigated.emit(link())" [routerLink]="link().path">{{
      link().text
    }}</a>
  `,
  styles: ``,
})
export class NavLinkComponent {
  link = input.required<NaviLinkModel>();

  navigated = output<NaviLinkModel>();
}
