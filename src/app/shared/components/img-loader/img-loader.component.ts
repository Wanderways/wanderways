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
  protected src!: string;
  @Input("src") set setSrc(src: string) {
    this.src = src;
    this.smallBackgroundImage = `url("${this.generateSmallUrl(this.src)}")`;
    this.full_img.nativeElement.addEventListener("load", (() => { this.imageLoaded = true }).bind(this))
  };
  @Input() srcset: string = "";
  @Input() alt: string = "";

  @ViewChild("full_img", { static: true }) full_img!: ElementRef<HTMLImageElement>;

  @HostBinding('style.backgroundImage')
  smallBackgroundImage = '';

  imageLoaded = false;

  constructor() { }

  /**
   * Take an url such as ./assets/test.jpg and returns ./assets/small-test.jpg
   * @param imgUrl The image url
   * @returns the transformed image url
   */
  private generateSmallUrl(imgUrl: string): string {
    return imgUrl.replace(/(S|M|L|XL)\.(jpg|jpeg|png|webp)/, "XS.$2")
  }
}
