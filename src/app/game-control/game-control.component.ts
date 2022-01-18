import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output()
  onIncrementCounter = new EventEmitter<number>();

  intervalCounter: number = 0;
  interval: number = null;

  onStartGame() {
    if (this.interval === null) {
      console.log('Game started');
      this.interval = setInterval(() => {
        this.intervalCounter++;
        this.onIncrementCounter.emit(this.intervalCounter);
      }, 1000);
    } else console.log('Error: Game already running');
  }

  onStopGame() {
    if (this.interval != null) {
      console.log('Game paused');
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}
