import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewvotingComponent } from './newvoting.component';

describe('NewvotingComponent', () => {
  let component: NewvotingComponent;
  let fixture: ComponentFixture<NewvotingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewvotingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewvotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
