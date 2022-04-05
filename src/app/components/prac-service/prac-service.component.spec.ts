import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracServiceComponent } from './prac-service.component';

describe('PracServiceComponent', () => {
  let component: PracServiceComponent;
  let fixture: ComponentFixture<PracServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
