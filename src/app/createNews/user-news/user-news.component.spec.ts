import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNewsComponent } from './user-news.component';

describe('UserNewsComponent', () => {
  let component: UserNewsComponent;
  let fixture: ComponentFixture<UserNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserNewsComponent]
    });
    fixture = TestBed.createComponent(UserNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
