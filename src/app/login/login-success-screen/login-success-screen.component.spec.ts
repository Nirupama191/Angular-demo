import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSuccessScreenComponent } from './login-success-screen.component';

describe('LoginSuccessScreenComponent', () => {
  let component: LoginSuccessScreenComponent;
  let fixture: ComponentFixture<LoginSuccessScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSuccessScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSuccessScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
