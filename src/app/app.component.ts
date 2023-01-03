import {Component} from '@angular/core';
import {animate, group, keyframes, query, state, style, transition, trigger} from "@angular/animations";
import {boxAnimation} from "./app.animation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [boxAnimation]
})
export class AppComponent {
  boxState: string = 'start';
  visible: boolean = true;

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end';
  }

  specialState() {
    this.boxState = 'special';
  }

  animationStarted(event: any) {
    console.log('Animation started', event)
  }

  animationDone(event:any) {
    console.log('Animation done', event);
  }
}
