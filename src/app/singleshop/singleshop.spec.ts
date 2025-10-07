import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Singleshop } from './singleshop';

describe('Singleshop', () => {
  let component: Singleshop;
  let fixture: ComponentFixture<Singleshop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Singleshop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Singleshop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
