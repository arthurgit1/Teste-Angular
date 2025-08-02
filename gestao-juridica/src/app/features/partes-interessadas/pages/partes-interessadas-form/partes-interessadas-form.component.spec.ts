import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartesInteressadasFormComponent } from './partes-interessadas-form.component';

describe('PartesInteressadasFormComponent', () => {
  let component: PartesInteressadasFormComponent;
  let fixture: ComponentFixture<PartesInteressadasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartesInteressadasFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartesInteressadasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
