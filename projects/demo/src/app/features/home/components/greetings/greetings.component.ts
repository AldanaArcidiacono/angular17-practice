import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'isdi-greetings',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, FormsModule],
  template: `
    <div class="avatar">
      <img
        [ngSrc]="avatar"
        alt="Avatar logo"
        [width]="size"
        [height]="size"
        priority
      />
      <div class="user-info">
        <p>{{ greet }}, {{ user }}!</p>
        <p>Age: {{ age }}</p>
      </div>
    </div>

    <div class="years-buttons">
      <button (click)="age = age + 1">Happy Birthday!🌈</button>
      <button (click)="addTenYears($event, 5)">Add 5 years!🌈</button>
      <button (click)="addTenYears($event, 10)">Add 10 years!🌈</button>
    </div>

    <div class="user-name">
      <label for="userName">
        <span class="label-text">User name:</span>
        <input
          type="text"
          name=""
          placeholder="Write your name!"
          [(ngModel)]="user"
        />
      </label>
    </div>
  `,
  styles: `
    .avatar {
      align-items: center;
      display: flex;
      margin-bottom: 1.5rem;
      img {
        border-radius: 50%;
      }
      p {
        font-size: 1.3rem;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.125rem;
        margin: 0.2rem 0.5rem;
      }
    }
    .years-buttons {
      display: flex;
      margin-bottom: 1.5rem;
      button {
        all: unset;
        color: var(--vivid-pink);
        background-color: white;
        border: 1px solid var(--vivid-pink);
        border-radius: 0.3rem;
        font-size: 0.9rem;
        font-weight: 600;
        margin-right: 0.5rem;
        padding: 0.3rem;
      }
    }
    .user-name {
      input {
        margin-left: 0.5rem;
      }
      label {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.125rem;
      }
    }
  `,
})
export class GreetingsComponent {
  greet = 'Hello';
  user = 'Pepe';

  avatar =
    'https://upload.wikimedia.org/wikipedia/commons/0/0f/Gato_Siam%C3%A9s_ojos_azules.JPG';

  size = 80;
  age = 10;

  addTenYears(event: Event, value: number) {
    this.age = this.age + value;
    console.log(event);
  }

  updateName(value: string) {
    this.user = value;
  }
}
