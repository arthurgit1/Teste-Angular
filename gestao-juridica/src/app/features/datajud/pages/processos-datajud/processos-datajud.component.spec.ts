import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessosDatajudComponent } from './processos-datajud.component';

describe('ProcessosDatajudComponent', () => {
  let component: ProcessosDatajudComponent;
  let fixture: ComponentFixture<ProcessosDatajudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProcessosDatajudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessosDatajudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
