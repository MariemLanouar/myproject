import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionCandidatComponent } from './inscription-candidat.component';

describe('InscriptionCandidatComponent', () => {
  let component: InscriptionCandidatComponent;
  let fixture: ComponentFixture<InscriptionCandidatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscriptionCandidatComponent]
    });
    fixture = TestBed.createComponent(InscriptionCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
