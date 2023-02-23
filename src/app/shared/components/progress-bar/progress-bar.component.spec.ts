import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProgressBarComponent } from './progress-bar.component';

describe('ProgressBarComponent', () => {
  let component: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgressBarComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });


  describe("state tests", () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it("should start with 0 and be in low state", () => {
      component.currentFound = 0;
      expect(component.currentStage).toEqual("low")
    })


    it("should be in medium when above 31% and below 60%", () => {
      component.objective = 10;
      component.currentFound = 4;
      expect(component.currentStage).toEqual("medium")
    })


    it("should be in found when above 60%", () => {
      component.objective = 10;
      component.currentFound = 7;
      expect(component.currentStage).toEqual("found")
    })


    it("should be in found when 100%", () => {
      component.objective = 10;
      component.currentFound = 10;
      expect(component.currentStage).toEqual("found")
    })

    it("should be in ERROR when more than 100%", () => {
      component.objective = 10;
      component.currentFound = 100;
      expect(component.currentStage).toEqual("error")
    })
  })


  describe("template tests", () => {
    it("should have a correct width according to current percentage", () => {
    component.objective = 10;
    component.currentFound = 7;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css(".current-progress-bar")).nativeElement.style.width).toEqual("70%")
  })
  })
});
