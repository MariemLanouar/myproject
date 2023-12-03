import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseForumComponent } from './entreprise-forum.component';

describe('EntrepriseForumComponent', () => {
  let component: EntrepriseForumComponent;
  let fixture: ComponentFixture<EntrepriseForumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntrepriseForumComponent]
    });
    fixture = TestBed.createComponent(EntrepriseForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
