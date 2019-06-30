import { DiveSiteInfoService } from './../../../_services/diveSiteInfo/dive-site-info.service';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dive-site-info-map-panel',
  templateUrl: './dive-site-info-map-panel.component.html',
  styleUrls: ['./dive-site-info-map-panel.component.scss']
})
export class DiveSiteInfoMapPanelComponent implements OnInit {

  @Input() showDivePanel= false;
  diveSiteInformation: any;
  diveSiteSubscription: Subscription;

  constructor(
    private readonly diveSiteInfoService : DiveSiteInfoService
  ) { }

  ngOnInit() {
    this.getCurrentDiveInfo();
  }

  toggleDivePanel(){
    this.diveSiteInfoService.showDiveSiteInfo();
  }

  getCurrentDiveInfo(){
    this.diveSiteSubscription = this.diveSiteInfoService.getDiveSiteInfo.subscribe((response)=>{
      console.log(response);
      if(response !== null){
        this.diveSiteInformation = response;
      }
    })
  }

  ngOnDestroy(){
    this.diveSiteSubscription.unsubscribe();
  }
}
