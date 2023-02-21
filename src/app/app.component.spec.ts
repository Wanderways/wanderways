import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component : AppComponent;
  let fixture : ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });


  it('should render main-content div', () => {
    const compiled : HTMLElement = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div#main-content')).toBeTruthy();
  });

  it('should render the sidenav component', () => {
    const sidenavElementDe = fixture.debugElement.query(By.css('app-sidenav'));
    expect(sidenavElementDe.nativeElement).toBeTruthy();
  });

  it('should render the header component', () => {
    const headerElementDe = fixture.debugElement.query(By.css('app-header'));
    expect(headerElementDe.nativeElement).toBeTruthy();
  });

  it('should render the router outlet', () => {
    const routerOutletElementDe = fixture.debugElement.query(By.css('router-outlet'));
    expect(routerOutletElementDe.nativeElement).toBeTruthy();
  });
});
