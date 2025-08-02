import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartesInteressadasListagemComponent } from './partes-interessadas-listagem.component';

describe('PartesInteressadasListagemComponent', () => {
  let component: PartesInteressadasListagemComponent;
  let fixture: ComponentFixture<PartesInteressadasListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartesInteressadasListagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartesInteressadasListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
