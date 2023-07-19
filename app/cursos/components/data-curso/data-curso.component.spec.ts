import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCursoComponent } from './data-curso.component';

describe('DataCursoComponent', () => {
  let component: DataCursoComponent;
  let fixture: ComponentFixture<DataCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
