import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatForumComponent } from './candidat-forum.component';

describe('CandidatForumComponent', () => {
  let component: CandidatForumComponent;
  let fixture: ComponentFixture<CandidatForumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidatForumComponent]
    });
    fixture = TestBed.createComponent(CandidatForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
