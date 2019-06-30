import { HeaderOptionsService } from './../../_services/headerOpts/header-options.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {

  @Input() showMenu = false;
  navOptions: any;

  constructor(
    private readonly headerOptionsService: HeaderOptionsService
  ) { }

  ngOnInit() {
    this.getHeaderOpts();
  }

  getHeaderOpts(){
    this.navOptions = this.headerOptionsService.getHeaderOpts();
  }

}
