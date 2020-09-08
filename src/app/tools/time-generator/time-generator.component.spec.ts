import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeGeneratorComponent } from './time-generator.component';

describe('TimeGeneratorComponent', () => {
  let component: TimeGeneratorComponent;
  let fixture: ComponentFixture<TimeGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
