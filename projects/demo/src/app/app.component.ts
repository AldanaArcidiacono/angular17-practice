import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { HeaderComponent } from './shared/header/header/header.component';
import { MenuOptionsComponent } from './shared/menu/menu-options/menu-options.component';
import { MenuOptions } from './interfaces/menu-options';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './shared/about/about.component';

@Component({
  selector: 'isdi-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MenuOptionsComponent,
    HomeComponent,
    AboutComponent,
  ],
  template: `
    <isdi-header [title]="title">
      <isdi-menu [items]="menuOptions" />
    </isdi-header>
    <main>
      <router-outlet />
    </main>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular v17 Practice';

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
