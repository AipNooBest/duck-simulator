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
    if (this.duck.hunger < 100){
      this.duck.hunger += 10;
    }
  }
  updateAge(): void{
    this.duck.age += 1;
    this.duck.hunger -= 10;
    if (Math.random() * 4000 <= this.duck.age){
      this.kill(this.duck.id, 'старости в возрасте ' + this.formatAge(this.duck.age));
    }
    if (this.duck.hunger === 0) {
      this.kill(this.duck.id, 'голода');
    }
  }
  kill(id: number, reason: string): void{
    this.killDuck.emit(id);
    this.sendMessage.emit('Уточка по имени ' + this.duck.name + ' умерла от ' + reason);
  }
  formatAge(days): string{
    let month = 0;
    let year = 0;
    let resultString = '';
    for (; days > 30;){
      month += 1;
      days -= 30;
      if (month >= 12){
        year += 1;
        month -= 12;
      }
    }
    if (year !== 0){
      resultString += year + this.formatRuDate(year, 'года', 'лет', 'лет') + ', ';
    }
    if (month !== 0){
      resultString += month + this.formatRuDate(month, 'месяца', 'месяцев', 'месяцев') + ' и ';
    }
    resultString += days + this.formatRuDate(days, 'дня', 'дней', 'дней');
    return resultString;
  }
  formatRuDate(date: number, first: string, twoToFour: string, word: string): string{
    switch (date % 10){
      case 1:
        if (Math.floor(date / 10) === 1) { break; }
        word = first;
        break;
      case 2:
      case 3:
      case 4:
        if (Math.floor(date / 10) === 1) { break; }
        word = twoToFour;
        break;
    }
    return ' ' + word;
  }
  ngOnInit(): void {}
}
