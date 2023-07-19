import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBecasComponent } from './info-becas.component';

describe('InfoBecasComponent', () => {
  let component: InfoBecasComponent;
  let fixture: ComponentFixture<InfoBecasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBecasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoBecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
