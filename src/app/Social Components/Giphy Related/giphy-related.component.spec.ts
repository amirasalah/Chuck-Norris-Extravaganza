import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyRelatedComponent } from './giphy-related.component';

describe('GiphyRelatedComponent', () => {
  let component: GiphyRelatedComponent;
  let fixture: ComponentFixture<GiphyRelatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphyRelatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
