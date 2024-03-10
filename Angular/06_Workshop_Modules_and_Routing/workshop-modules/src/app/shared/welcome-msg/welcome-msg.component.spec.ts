import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeMsgComponent } from './welcome-msg.component';

describe('WelcomeMsgComponent', () => {
  let component: WelcomeMsgComponent;
  let fixture: ComponentFixture<WelcomeMsgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeMsgComponent]
    });
    fixture = TestBed.createComponent(WelcomeMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
