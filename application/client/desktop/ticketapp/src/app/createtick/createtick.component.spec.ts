import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetickComponent } from './createtick.component';

describe('CreatetickComponent', () => {
  let component: CreatetickComponent;
  let fixture: ComponentFixture<CreatetickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});