import { ComponentFixture, TestBed  } from '@angular/core/testing';

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
      component.src = "./assets/tests/good-img.jpg"
      component.ngOnInit()
      fixture.detectChanges();
    });

    it('should set the input url', () => {
      expect(component.full_img.nativeElement.src).toContain("/assets/tests/good-img.jpg");
      expect(component.smallBackgroundImage).toContain("small-good-img.jpg");
      expect(fixture.nativeElement.style.backgroundImage).toContain("small-good-img.jpg");
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
