import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should render a section",()=>{
    const sectionDe = fixture.debugElement.query(By.css('section#home-presentation-text'));
    expect(sectionDe.nativeElement).toBeTruthy();
  })

  it("should render a welcome message",()=>{
    const title : HTMLElement = fixture.debugElement.query(By.css('section#home-presentation-text>h1#home-welcome')).nativeElement;
    expect(title.textContent).toMatch(/Welcome to Wanderways/i);
  })

  it("should render a catch phrase",()=>{
    const catchPhrase : HTMLElement = fixture.debugElement.query(By.css('section#home-presentation-text>span#home-catch-phrase')).nativeElement;
    expect(catchPhrase.textContent).toMatch(/To learn maps the fun way/i);
  })

});
