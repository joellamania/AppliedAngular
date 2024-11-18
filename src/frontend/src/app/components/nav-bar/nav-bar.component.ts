import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
  OnInit,
} from '@angular/core';
import { NavLinkComponent } from './components/nav-link.component';
import { NaviLinkModel } from './types';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nav-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NavLinkComponent],
  template: `
    <div class="navbar bg-base-100">
      <div class="flex-1">{{ this.siteName() }}</div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          @for (link of links(); track link.text) {
            <li>
              <app-link [link]="link" (navigated)="onNavigation($event)" />
            </li>
          }
        </ul>
      </div>
    </div>
  `,
  styles: ``,
})
export class NavBarComponent implements OnInit {
  #titleService = inject(Title);
  siteName = signal('Applied Angular');
  ngOnInit(): void {
    this.#titleService.setTitle(this.siteName());
  }
  onNavigation(item: NaviLinkModel) {
    this.#titleService.setTitle(`${this.siteName()} | ${item.text}`);
  }
  links = signal<NaviLinkModel[]>([
    {
      text: 'Home',
      path: 'home',
    },
    {
      text: 'About',
      path: 'about',
    },
  ]);
}
