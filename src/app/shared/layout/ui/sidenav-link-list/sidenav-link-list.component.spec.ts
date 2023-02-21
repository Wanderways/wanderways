import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavLinkListComponent } from './sidenav-link-list.component';

describe('SidenavLinkListComponent', () => {
  let component: SidenavLinkListComponent;
  let fixture: ComponentFixture<SidenavLinkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavLinkListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavLinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
