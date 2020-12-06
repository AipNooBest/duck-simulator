import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Duck} from '../app.component';

@Component({
  selector: 'app-ducks',
  templateUrl: './ducks.component.html',
  styleUrls: ['./ducks.component.css']
})

export class DucksComponent implements OnInit {
  @Input() duck: Duck;
  @Input() ducks: Duck[];
  @Output() killDuck = new EventEmitter<number>();
  @Output() sendMessage = new EventEmitter<string>();
  hit(): void{
    this.duck.HP = this.duck.HP - 10;
    if (!this.duck.HP) { this.kill(this.duck.id, 'слишком частых ударов'); }
  }
  feed(): void{
    if (this.duck.HP < 100){
      this.duck.HP += 10;
    }
  }
  updateAge(): void{
    this.duck.age += 1;
    if (Math.random() * 100 <= this.duck.age){
      this.kill(this.duck.id, 'старости');
    }
  }
  kill(id: number, reason: string): void{
    this.killDuck.emit(id);
    this.sendMessage.emit('Уточка по имени ' + this.duck.name + ' умерла от ' + reason);
  }
  ngOnInit(): void {}
}
