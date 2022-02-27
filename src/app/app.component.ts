import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn-your-maps';

  private removeClassList(){
    document.documentElement.classList.value = "";
  }

  setTheme(theme : string){
    console.log(theme);
    console.log(document.documentElement.classList);
    
    this.removeClassList();
    document.documentElement.classList.add(theme);
    console.log(document.documentElement.classList);
  }
}
