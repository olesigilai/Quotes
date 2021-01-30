import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteChilComponent } from './quote-chil.component';

describe('QuoteChilComponent', () => {
  let component: QuoteChilComponent;
  let fixture: ComponentFixture<QuoteChilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteChilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteChilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
