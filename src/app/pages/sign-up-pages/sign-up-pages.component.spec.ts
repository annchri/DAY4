import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpPagesComponent } from './sign-up-pages.component';

describe('SignUpPagesComponent', () => {
  let component: SignUpPagesComponent;
  let fixture: ComponentFixture<SignUpPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
