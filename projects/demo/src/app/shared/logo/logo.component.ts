import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export type LogoOptions = {
  side?: string;
};

@Component({
  selector: 'isdi-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo-component.svg',
  styles: `
    svg {
      padding: 0.7rem;
    }
  `,
})
export class LogoComponent implements OnInit {
  @Input() options!: LogoOptions;
  // Events
  @Output() logoClick: EventEmitter<string>;

  constructor() {
    this.logoClick = new EventEmitter();
  }

  ngOnInit(): void {
    this.options = {
      side: '25rem',
      ...this.options,
    };
  }

  onClick(path: string) {
    this.logoClick.next(path);
  }
}
