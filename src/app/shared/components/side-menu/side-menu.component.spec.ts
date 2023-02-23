import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideMenuComponent } from './side-menu.component';
import { Viewport } from 'karma-viewport/dist/adapter/viewport';
import { By } from '@angular/platform-browser';
declare const viewport: Viewport;

describe('SideMenuComponent', () => {
  let component: SideMenuComponent;
  let fixture: ComponentFixture<SideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideMenuComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  describe("when 'reactive' behavior given", () => {
    beforeEach(() => {
      component.behavior = "reactive";
      fixture.detectChanges();
    });

    it("should have 'fixed' on mobile (<1024)", () => {
      viewport.set("mobile")
      component.ngOnInit();
      fixture.detectChanges();
      const sideMenuComponentDom: HTMLElement = fixture.debugElement.nativeElement;

      expect(sideMenuComponentDom.classList).toContain("fixed")
      expect(component.isSmallDevice).toBeTrue()
    })

    it("should have 'sticky' on desktop (>1024)", () => {
      viewport.set("screen")
      component.ngOnInit();
      fixture.detectChanges();
      const sideMenuComponentDom: HTMLElement = fixture.debugElement.nativeElement;
      expect(sideMenuComponentDom.classList).toContain("sticky")
      expect(component.isSmallDevice).toBeFalse()
    })

    afterEach(() => {
      viewport.reset()
    })
  })

  describe("with 'fixed' or 'sticky' class in component's tag", () => {
    it("should have 'fixed' class in component's tag when 'fixed' behavior given", () => {
      component.behavior = "fixed";
      component.ngOnInit();
      fixture.detectChanges();
      const sideMenuComponentDom: HTMLElement = fixture.debugElement.nativeElement;
      expect(sideMenuComponentDom.classList).toContain("fixed")
    })

    it("should have 'sticky' class in component's tag when 'sticky' behavior given", () => {
      component.behavior = "sticky";
      component.ngOnInit();
      fixture.detectChanges();
      const sideMenuComponentDom: HTMLElement = fixture.debugElement.nativeElement;
      expect(sideMenuComponentDom.classList).toContain("sticky")
    })
  })

  describe("orientation tests", () => {
    it("should have 'left' class in component's tag when 'left' direction given", () => {
      component.direction = "left";
      component.ngOnInit();
      fixture.detectChanges();
      const sideMenuComponentDom: HTMLElement = fixture.debugElement.nativeElement;
      expect(sideMenuComponentDom.classList).toContain("left")
    })

    it("should have 'right' class in component's tag when 'right' direction given", () => {
      component.direction = "right";
      component.ngOnInit();
      fixture.detectChanges();
      const sideMenuComponentDom: HTMLElement = fixture.debugElement.nativeElement;
      expect(sideMenuComponentDom.classList).toContain("right")
    })
  })

  describe("displaySideMenu tests", () => {
    it("should be displayed in DOM when given false", () => {
      component.displaySideMenu = false;
      component.ngOnInit();
      fixture.detectChanges();
      const mobileResponsiveSidemenu = fixture.debugElement.query(By.css("div#side-menu-container"));
      expect(mobileResponsiveSidemenu).toBeTruthy()
    })
    it("should be displayed in DOM when given true", () => {
      component.displaySideMenu = true;
      component.ngOnInit();
      fixture.detectChanges();

      const mobileResponsiveSidemenu = fixture.debugElement.query(By.css("div#side-menu-container"));
      expect(mobileResponsiveSidemenu).toBeTruthy()
    })
    it("shouldn't be displayed in DOM when given no value", () => {
      component.ngOnInit();
      fixture.detectChanges();

      const mobileResponsiveSidemenu = fixture.debugElement.query(By.css("div#side-menu-container"));
      expect(mobileResponsiveSidemenu).not.toBeTruthy()
    })
  })

  describe("backdrop behavior", () => {
    it("shouldn't be displayed in DOM when displaySideMenu is false", () => {
      viewport.set("mobile")
      component.displaySideMenu = false;
      component.behavior = "fixed";
      component.ngOnInit();
      fixture.detectChanges();
      const mobileResponsiveSidemenu = fixture.debugElement.query(By.css("div#side-menu-backdrop"));
      expect(mobileResponsiveSidemenu).not.toBeTruthy()
    })


    describe("with displayed always true", () => {
      beforeEach(() => {
        component.displaySideMenu = true;
      })

      it("should be displayed on mobile in reactive behavior", () => {
        viewport.set("mobile")
        component.behavior = "reactive";
        component.ngOnInit();
        fixture.detectChanges();
        const mobileResponsiveSidemenu = fixture.debugElement.query(By.css("div#side-menu-backdrop"));
        expect(mobileResponsiveSidemenu).toBeTruthy()
      })

      it("shouldn't be displayed on screen in reactive behavior", () => {
        viewport.set("screen")
        component.behavior = "reactive";
        component.ngOnInit();
        fixture.detectChanges();
        const mobileResponsiveSidemenu = fixture.debugElement.query(By.css("div#side-menu-backdrop"));
        expect(mobileResponsiveSidemenu).not.toBeTruthy()
      })


      it("should be displayed when fixed behavior on small screen", () => {
        component.behavior = "fixed";
        component.ngOnInit();
        fixture.detectChanges();
        const mobileResponsiveSidemenu = fixture.debugElement.query(By.css("div#side-menu-backdrop"));
        expect(mobileResponsiveSidemenu).toBeTruthy()
      })
    })

    afterEach(() => {
      viewport.reset()
    })
  })

  it('should emit displaySideMenuEvent', () => {
    component.behavior = "fixed";
    component.ngOnInit();
    fixture.detectChanges();

    spyOn<any,any>(component.displaySideMenuChange, 'emit');
    component.displaySideMenuEvent()

    expect(component.displaySideMenuChange.emit).toHaveBeenCalled();
  });

});
