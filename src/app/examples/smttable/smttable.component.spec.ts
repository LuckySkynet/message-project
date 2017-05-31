import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmttableComponent } from './smttable.component';

describe('SmttableComponent', () => {
  let component: SmttableComponent;
  let fixture: ComponentFixture<SmttableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmttableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
