import { Component, Input } from '@angular/core';

@Component({
  selector: 'isdi-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      <address>{{ brand }}</address>
      <p>{{ toDay }}</p>
    </footer>
  `,
  styles: `
    footer {
      align-items: center;
      background-color: var(--my-black);
      bottom: 0;
      color: var(--my-pink);
      display: flex;
      justify-content: space-between;
      padding-inline: 0.7rem;
      position: absolute;
      width: 100%;
      p {
        margin-block: 0.8rem;
      }
    }
  `,
})
export class FooterComponent {
  @Input({ required: true }) brand = '';

  day = new Date().getDay();
  month = new Date().getDate();
  year = new Date().getFullYear();
  toDay = `${this.day}-${this.month}-${this.year}`;
}
