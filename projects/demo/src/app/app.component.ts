import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { HeaderComponent } from './shared/header/header.component';
import { MenuOptionsComponent } from './shared/menu/menu-options.component';
import { MenuOptions } from './core/types/menu-options';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'isdi-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MenuOptionsComponent,
    FooterComponent,
  ],
  template: `
    <div class="app">
      <isdi-header [title]="title">
        <isdi-menu [items]="menuOptions" />
      </isdi-header>
      <main>
        <router-outlet />
      </main>
      <isdi-footer [brand]="brand" />
    </div>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular v17 Practice';
  brand = 'Aldana Arcidiacono';

  menuOptions: MenuOptions[] = [];

  constructor() {
    this.menuOptions = routes
      .filter((route) => route.path !== '**' && route.path !== '')
      .map((route) => ({
        title: route.title as string,
        path: route.path as string,
      }));
  }
}
