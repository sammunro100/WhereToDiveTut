import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderOptionsService {

  headerOpts= {
    navigation:[
      {
        routerLink: 'home',
        routerDisplayName: 'Home'
      },
      {
        routerLink: 'forum',
        routerDisplayName: 'Forums'
      },
      {
        routerLink: 'equipment',
        routerDisplayName: 'Equipment'
      },
      {
        routerLink: 'learnToDive',
        routerDisplayName: 'Learn to Dive'
      },
      {
        routerLink: 'gallery',
        routerDisplayName: 'Gallery'
      },
      {
        routerLink: 'conservation',
        routerDisplayName: 'Conservation Efforts'
      },
    ],
    adminNavigation:[
      {
        routerLink: 'support',
        routerDisplayName: 'Support'
      },
      {
        routerLink: 'account',
        routerDisplayName: 'Account'
      },
      {
        routerLink: 'login',
        routerDisplayName: 'Login'
      }
    ]
  }

  constructor() { }

  getHeaderOpts(){
    return this.headerOpts;
  }
}
