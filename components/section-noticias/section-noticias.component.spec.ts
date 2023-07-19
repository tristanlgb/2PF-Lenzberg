import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionNoticiasComponent } from './section-noticias.component';

describe('SectionNoticiasComponent', () => {
  let component: SectionNoticiasComponent;
  let fixture: ComponentFixture<SectionNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionNoticiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
