import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionItemHeaderComponent } from './accordion-item-header.component';

describe('AccordionItemHeaderComponent', () => {
  let component: AccordionItemHeaderComponent;
  let fixture: ComponentFixture<AccordionItemHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionItemHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionItemHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
