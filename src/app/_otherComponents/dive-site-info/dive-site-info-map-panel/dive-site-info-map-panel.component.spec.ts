import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiveSiteInfoMapPanelComponent } from './dive-site-info-map-panel.component';

describe('DiveSiteInfoMapPanelComponent', () => {
  let component: DiveSiteInfoMapPanelComponent;
  let fixture: ComponentFixture<DiveSiteInfoMapPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiveSiteInfoMapPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiveSiteInfoMapPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
