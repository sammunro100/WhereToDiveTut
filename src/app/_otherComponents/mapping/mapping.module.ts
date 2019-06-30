import { DiveSiteInfoModule } from './../dive-site-info/dive-site-info.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MappingRoutingModule } from './mapping-routing.module';
import { MapViewComponent } from './map-view/map-view.component';


@NgModule({
  declarations: [MapViewComponent],
  imports: [
    CommonModule,
    MappingRoutingModule,
    DiveSiteInfoModule
  ], 
  exports: [ MapViewComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MappingModule { }
