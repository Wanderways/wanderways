import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagDisplayerComponent } from './tag-displayer.component';

describe('TagDisplayerComponent', () => {
  let component: TagDisplayerComponent;
  let fixture: ComponentFixture<TagDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagDisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
