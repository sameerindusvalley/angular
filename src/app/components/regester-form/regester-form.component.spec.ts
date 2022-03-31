import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegesterFormComponent } from './regester-form.component';

describe('RegesterFormComponent', () => {
  let component: RegesterFormComponent;
  let fixture: ComponentFixture<RegesterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegesterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegesterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
