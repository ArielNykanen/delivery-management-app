import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationServices } from '../animation-services/animation.services';

@Injectable()
export class NavigationServices {
  constructor(private router: Router,
    private animationServices: AnimationServices
    ) {}
  navigateWithSlide(param: string) {
    const slideTime = this.animationServices.getSlideTime(); // to change the time go to animations.ts
    this.animationServices.faderAnimation.next(true);
    this.animationServices.sliderAnimation.next(false);
    setTimeout(() => {
      this.router.navigate([param]);
      this.animationServices.sliderAnimation.next(true);
    this.animationServices.faderAnimation.next(false);
    }, slideTime);
  }

      navigateFast(param) {
        this.router.navigate([param]);
      }
}
