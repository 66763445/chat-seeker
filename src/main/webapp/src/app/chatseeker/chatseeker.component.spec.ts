import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatseekerComponent } from './chatseeker.component';

describe('ChatseekerComponent', () => {
  let component: ChatseekerComponent;
  let fixture: ComponentFixture<ChatseekerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatseekerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
