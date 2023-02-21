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
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div#main-content')).toBeTruthy();
  });

  it('should render the sidenav component', () => {
    const sidenavElement = fixture.debugElement.query(By.css('app-sidenav'));
    expect(sidenavElement.nativeElement).toBeTruthy();
  });

  it('should render the header component', () => {
    const headerElement = fixture.debugElement.query(By.css('app-header'));
    expect(headerElement.nativeElement).toBeTruthy();
  });

  it('should render the router outlet', () => {
    const routerOutletElement = fixture.debugElement.query(By.css('router-outlet'));
    expect(routerOutletElement.nativeElement).toBeTruthy();
  });
});
