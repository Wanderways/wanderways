import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgLoaderComponent } from './img-loader.component';

describe('ImgLoaderComponent', () => {
  let component: ImgLoaderComponent;
  let fixture: ComponentFixture<ImgLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgLoaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("when the image url exists", () => {
    beforeEach(() => {
      component.setSrc = "/assets/tests/S.jpg";
      fixture.detectChanges();
    });

    it('should set the input url', () => {
      expect(component.full_img.nativeElement.src).toContain("/assets/tests/S.jpg");
      expect(component.smallBackgroundImage).toContain("XS.jpg");
      expect(fixture.nativeElement.style.backgroundImage).toContain("XS.jpg");

    });

    it('should have loaded the full img', () => {
      component.full_img.nativeElement.dispatchEvent(new Event("load"))
      fixture.detectChanges();
      expect(fixture.nativeElement.classList).toContain("loaded");
    });

    it('should blur the full img', () => {
      expect(fixture.nativeElement.classList).not.toContain("loaded");
    });
  })
});
