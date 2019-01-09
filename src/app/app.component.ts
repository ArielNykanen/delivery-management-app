import { Component, OnInit, Injectable } from '@angular/core';
import { slideInOut, fadeIn } from './services/animation-services/animations';
import { AnimationServices } from './services/animation-services/animation.services';
import { AlertModel } from './models/alert.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [
    slideInOut,
    fadeIn
  ]
})
export class AppComponent implements OnInit {
  title = 'J-D-M';
  slideInOut = true;
  fader = false;
  constructor(private animationServices: AnimationServices) {}

  ngOnInit() {
    this.animationServices.sliderAnimation.subscribe(
      (bool: boolean) => {this.slideInOut = bool;
      }
    );
    this.animationServices.faderAnimation.subscribe(
      (bool: boolean) => {this.fader = bool;
      }
    );
  }
}
