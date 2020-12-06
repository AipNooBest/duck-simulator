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
  hit(): void{
    this.duck.HP = this.duck.HP - 10;
    if (!this.duck.HP) { this.kill(this.duck.id); }
  }
  feed(): void{
    if (this.duck.HP < 100){
      this.duck.HP += 10;
    }
  }
  kill(id: number): void{
    this.killDuck.emit(id);
  }
  ngOnInit(): void {}
}
