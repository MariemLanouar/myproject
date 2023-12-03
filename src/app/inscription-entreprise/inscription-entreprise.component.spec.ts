import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionEntrepriseComponent } from './inscription-entreprise.component';

describe('InscriptionEntrepriseComponent', () => {
  let component: InscriptionEntrepriseComponent;
  let fixture: ComponentFixture<InscriptionEntrepriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscriptionEntrepriseComponent]
    });
    fixture = TestBed.createComponent(InscriptionEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
