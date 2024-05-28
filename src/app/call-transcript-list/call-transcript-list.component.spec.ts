import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallTranscriptListComponent } from './call-transcript-list.component';

describe('CallTranscriptListComponent', () => {
  let component: CallTranscriptListComponent;
  let fixture: ComponentFixture<CallTranscriptListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallTranscriptListComponent]
    });
    fixture = TestBed.createComponent(CallTranscriptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
