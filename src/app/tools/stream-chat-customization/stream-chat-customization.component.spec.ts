import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamChatCustomizationComponent } from './stream-chat-customization.component';

describe('StreamChatCustomizationComponent', () => {
  let component: StreamChatCustomizationComponent;
  let fixture: ComponentFixture<StreamChatCustomizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamChatCustomizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamChatCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
