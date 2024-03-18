import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'isdi-greetings',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, FormsModule],
  template: `
    <p>{{ greet }}, {{ user }}!</p>
    <!-- los [] son como en Vue los : (Operador de atributos) -->
    <img [ngSrc]="avatar" alt="" [width]="size" [height]="size" priority />

    <div>
      <p>Age: {{ age }}</p>

      <!-- Eventos es con (), Declarativamente -->
      <button (click)="age = age + 1">Cumpleaños!🌈</button>
      <!-- Siempre va ejecutado el manejador de eventos, dentro le podemos pasar parametros. 
      Solo se ejecuta en el click. El objeto evento no es obligatorio -->
      <button (click)="addTenYears($event, 5)">Añadir 5 años!🌈</button>
      <button (click)="addTenYears($event, 10)">Añadir 10 años!🌈</button>
    </div>

    <div>
      <label for="userName">
        <span>Nombre</span>
        <input
          type="text"
          name=""
          placeholder="Write your name!"
          [(ngModel)]="user"
        />
      </label>
    </div>
  `,
  styles: ``,
})
export class GreetingsComponent {
  greet = 'Hello';
  user = 'Pepe';

  avatar =
    'https://upload.wikimedia.org/wikipedia/commons/0/0f/Gato_Siam%C3%A9s_ojos_azules.JPG';

  size = 100;
  age = 10;

  // Recoger eventos, pasar variables y llamar a una funvion en template
  addTenYears(event: Event, value: number) {
    this.age = this.age + value;
    console.log(event);
  }

  updateName(value: string) {
    this.user = value;
  }
}
