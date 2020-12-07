import {Component, Input, OnInit} from '@angular/core';
import {Duck} from '../app.component';

@Component({
  selector: 'app-duck-creator',
  templateUrl: './duck-creator.component.html',
  styleUrls: ['./duck-creator.component.css']
})
export class DuckCreatorComponent implements OnInit {
  @Input() ducks: Duck[];
  createDuck(name): void{
    if (name.trim() === '') { return; }
    this.ducks.push({
      id: Date.now(),
      name,
      HP: 100,
      age: 0,
      hunger: 100,
    });
  }
  ngOnInit(): void {}
}
