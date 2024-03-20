import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuOptions } from '../../interfaces/menu-options';

@Component({
  selector: 'isdi-menu',
  standalone: true,
  imports: [RouterModule],
  template: `<nav>
    <ul>
      @for (item of items; track $index) {
        <li>
          <a [routerLink]="item.path" routerLinkActive="active">{{
            item.title
          }}</a>
        </li>
      }
    </ul>
  </nav>`,
  styleUrl: './menu-options.component.scss',
})
export class MenuOptionsComponent {
  @Input({
    required: true,
  })
  items: MenuOptions[] = [];
}
