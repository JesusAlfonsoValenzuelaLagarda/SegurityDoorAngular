import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserControlComponent } from './create-user-control.component';

describe('CreateUserControlComponent', () => {
  let component: CreateUserControlComponent;
  let fixture: ComponentFixture<CreateUserControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
