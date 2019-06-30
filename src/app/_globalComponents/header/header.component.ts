import { HeaderOptionsService } from './../../_services/headerOpts/header-options.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerOpts: any;
  showMenuVariable = false;

  constructor(
    private readonly headerOptionsService: HeaderOptionsService
  ) { }

  ngOnInit() {
    this.getHeaderOpts();
  }

  getHeaderOpts(){
    this.headerOpts = this.headerOptionsService.getHeaderOpts();
  }

  toggleMobileMenu(){
    this.showMenuVariable = !this.showMenuVariable;
  }

}
