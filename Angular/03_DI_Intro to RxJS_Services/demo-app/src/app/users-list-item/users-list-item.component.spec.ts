import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListItemComponent } from './users-list-item.component';

describe('UsersListItemComponent', () => {
  let component: UsersListItemComponent;
  let fixture: ComponentFixture<UsersListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersListItemComponent]
    });
    fixture = TestBed.createComponent(UsersListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
