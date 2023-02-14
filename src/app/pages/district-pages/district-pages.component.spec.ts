import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictPagesComponent } from './district-pages.component';

describe('DistrictPagesComponent', () => {
  let component: DistrictPagesComponent;
  let fixture: ComponentFixture<DistrictPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
