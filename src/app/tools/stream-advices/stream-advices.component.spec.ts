import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamAdvicesComponent } from './stream-advices.component';

describe('StreamAdvicesComponent', () => {
  let component: StreamAdvicesComponent;
  let fixture: ComponentFixture<StreamAdvicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamAdvicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamAdvicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
