import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger, } from '@angular/animations';

@Component({
  selector: 'app-lake',
  templateUrl: './lake.component.html',
  styleUrls: ['./lake.component.css'],
  animations: [
    trigger('moveDuck', [
      state('firstPosition', style({
        top: '{{ top }}',
        left: '{{ left }}',
      }), {params: { top: '50%', left: '50%' }}),
      state('secondPosition', style({
        top: '{{ top }}',
        left: '{{ left }}'
      }), {params: { top: '50%', left: '50%' }}),
      transition('firstPosition <=> secondPosition', [
        animate('{{ time }}')
      ], {params: { time: '2s' }})
    ])
  ]
})
export class LakeComponent implements OnInit {
  topValue: string;
  leftValue: string;
  time: string;
  moving = false;
  anim(): void {}
  ngOnInit(): void {
    setInterval(() => {
      this.topValue = (Math.random() * 100) + '%';
      this.leftValue = (Math.random() * 100) + '%';
      this.time = (Math.random() * 2 + 1) + 's';
      this.moving = !this.moving;
    }, 3000);
  }
}


