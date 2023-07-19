import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAlumnosComponent } from './section-alumnos.component';

describe('SectionAlumnosComponent', () => {
  let component: SectionAlumnosComponent;
  let fixture: ComponentFixture<SectionAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionAlumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
