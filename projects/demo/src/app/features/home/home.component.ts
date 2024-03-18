import { Component } from '@angular/core';
import { GreetingsComponent } from './greetings/greetings.component';

@Component({
  selector: 'isdi-home',
  standalone: true,
  imports: [GreetingsComponent],
  template: ` <h2>Home!</h2>
    <isdi-greetings></isdi-greetings>`,
  styles: ``,
})
export class HomeComponent {}
