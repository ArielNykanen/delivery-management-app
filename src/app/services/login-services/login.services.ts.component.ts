import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AnimationServices } from '../animation-services/animation.services';
import { NavigationServices } from '../navigation-services/navigation.services';

@Injectable()
export class LoginServices {

  // todo make it work with http service but check how to make it safe connection to db
  constructor(private router: Router,
     private animationServices: AnimationServices,
     private navigationServices: NavigationServices
     ) {}

  loginUser(username: string, password: any, rememberUser: boolean) {
    this.navigationServices.navigateWithSlide('main');
  }
}
