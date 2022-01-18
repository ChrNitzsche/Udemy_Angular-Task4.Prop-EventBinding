import { Component } from '@angular/core';
import { GameControlComponent } from './game-control/game-control.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  oddArray: number[] = [];
  evenArray: number[] = [];

  onCounterIncreased(event: number) {
    event % 2 === 0 ? this.evenArray.push(event) : this.oddArray.push(event);
  }
}
