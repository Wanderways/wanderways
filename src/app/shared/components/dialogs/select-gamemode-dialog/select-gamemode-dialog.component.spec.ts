import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGamemodeDialogComponent } from './select-gamemode-dialog.component';

describe('SelectGamemodeDialogComponent', () => {
  let component: SelectGamemodeDialogComponent;
  let fixture: ComponentFixture<SelectGamemodeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectGamemodeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectGamemodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
