import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { InputComponent } from '../../../../shared/input/input.component';
import { ButtonComponent } from '../../../../shared/button/button.component';

@Component({
  selector: 'isdi-greetings',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, InputComponent, ButtonComponent],
  template: `
    <div class="avatar">
      <img
        [ngSrc]="avatar"
        alt="Avatar logo"
        [width]="size"
        [height]="size"
        priority
      />
      <p>{{ greet }}, {{ user }}!</p>
    </div>

    <isdi-input
      labelFor="user-name"
      labelText="Change user name:"
      placeholder="Type de users name..."
      [value]="user"
      (valueChange)="onInputValueChange($event)"
    />

    <div class="user-age">
      <p>Your age is:</p>
      <p class="age">{{ age }}</p>
    </div>

    <div class="years-buttons">
      <isdi-button btnText="Birthday!🌈" (buttonClick)="age = age + 1" />
      <isdi-button btnText="Add 5 years!" (buttonClick)="addMoreYears(5)" />
      <isdi-button btnText="Add 10 years!" (buttonClick)="addMoreYears(10)" />
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
    .user-age {
      align-items: center;
      display: flex;
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 100%;
      letter-spacing: -0.125rem;
      .age {
        align-items: center;
        background-color: var(--my-pink);
        border-radius: 6px;
        color: var(--my-pink-strong);
        display: flex;
        height: 30px;
        justify-content: center;
        margin-left: 10px;
        width: 50px;
      }
    }
    .years-buttons {
      display: flex;
      margin-bottom: 1.5rem;
      isdi-button {
        margin-right: 10px;
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

  updateName(value: string) {
    this.user = value;
  }

  // Updates the property of the parent component with the new value
  onInputValueChange(newValue: string) {
    this.user = newValue;
  }

  // Handles the event click
  addMoreYears(value: number) {
    this.age = this.age + value;
  }
}
