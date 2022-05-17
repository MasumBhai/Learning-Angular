import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learning-Angular';

  first_fun() {
    return "Function has been called";
  }

  click_event_fn01(name: string | number) { /* parameter:any or change in tsconfig.json's strict:false*/
    alert(name + " looks suspicious..!")
  }
  click_event_fn02(val:string){
  console.warn(val)
  }
}
