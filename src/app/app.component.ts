import {Component} from '@angular/core';

export interface Duck {
  id: number;
  name: string;
  age: number;
  HP: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ducks: Duck[] = [];
   killDuck(id: number): void{
    this.ducks = this.ducks.filter(duck => duck.id !== id);
   }
}
