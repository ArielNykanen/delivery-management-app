import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { slideTime } from './animations';

export class AnimationServices {
  sliderAnimation = new Subject();
  faderAnimation = new Subject();
  slideTime = slideTime;
  getSlideTime() {
    return this.slideTime;
  }
}
