import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiveSiteInfoRoutingModule } from './dive-site-info-routing.module';
import { DiveSiteInfoMapPanelComponent } from './dive-site-info-map-panel/dive-site-info-map-panel.component';

@NgModule({
  declarations: [DiveSiteInfoMapPanelComponent],
  imports: [
    CommonModule,
    DiveSiteInfoRoutingModule
  ],
  exports:[ DiveSiteInfoMapPanelComponent]
})
export class DiveSiteInfoModule { }
