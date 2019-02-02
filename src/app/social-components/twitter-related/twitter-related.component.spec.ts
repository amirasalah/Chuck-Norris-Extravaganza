import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterRelatedComponent } from './twitter-related.component';

describe('TwitterRelatedComponent', () => {
  let component: TwitterRelatedComponent;
  let fixture: ComponentFixture<TwitterRelatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterRelatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
