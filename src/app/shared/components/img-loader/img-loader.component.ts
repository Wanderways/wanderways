import { Component, Input, HostBinding, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true,
  selector: 'img-loader',
  templateUrl: 'img-loader.component.html',
  styleUrls: ['img-loader.component.scss'],
  host: {
    '[class.loaded]': 'imageLoaded'
  }
})

export class ImgLoaderComponent {
  @Input() src!: string;
  @Input() alt: string = "";

  @ViewChild("full_img", { static: true }) full_img!: ElementRef<HTMLImageElement>;

  @HostBinding('style.backgroundImage')
  smallBackgroundImage = '';

  imageLoaded = false;

  constructor() { }

  ngOnInit() {
    if (typeof this.src !== "string") {
      return console.error("A source must be set");
    }

    this.smallBackgroundImage = `url("${this.generateSmallUrl(this.src)}")`;
    this.full_img.nativeElement.addEventListener("load", (() => { this.imageLoaded = true }).bind(this))
  }

  /**
   * Take an url such as ./assets/test.jpg and returns ./assets/small-test.jpg
   * @param imgUrl The image url
   * @returns the transformed image url
   */
  private generateSmallUrl(imgUrl: string): string {
    let index = /(\w|-)*\.(jpg|.jpeg|png)/.exec(imgUrl)?.index;
    return imgUrl.slice(0, index) + "small-" + imgUrl.slice(index)
  }
}
