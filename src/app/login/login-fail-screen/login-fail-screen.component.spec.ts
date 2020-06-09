import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFailScreenComponent } from './login-fail-screen.component';

describe('LoginFailScreenComponent', () => {
  let component: LoginFailScreenComponent;
  let fixture: ComponentFixture<LoginFailScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFailScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFailScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
