import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learning-Angular';
  displayVal: string = ''
  truth_value = false;
  show = false;
  val_01 = "Masum"
  val_02 = "Hello"
  color01 = "Blue"
  array_01 = ['Abdullah', 'Al', 'Masum', 'Bhai', 'Jindabaad']
  userDetails = [
    {name: 'Masum', email: 'abdullahmasum6035@gmail.com', phone: '01551805248', accounts:['yahoo','facebook','linkedIn']},
    {name: 'Ishrak Latif', email: 'aztechvelly@gmail.com', phone: '01615001206',accounts:['gmail','telegram','Instagram']},
    {name: 'Guy', email: 'helloWorld035@gmail.com', phone: '01817001206',accounts:['outlook','what\'s app','linkedIn']},
    {name: 'Don\'t Know', email: 'ultapaltapagla@gmail.com', phone: '01681143600',accounts:['snapchat','facebook','linkedIn']},
    {name: 'Brainy Fool', email: 'brainy_fools@gmail.com', phone: '01533942468',accounts:['gmail','facebook','twitter']},
  ];


  first_fun() {
    return "Function has been called";
  }

  click_event_fn01(name: string | number) { /* parameter:any or change in tsconfig.json's strict:false*/
    alert(name + " looks suspicious..!")
  }

  click_event_fn02(val: string) {
    console.warn(val)
  }

  getting_inputValue01(val: any) {
    console.warn(val)
    this.displayVal = val;
  }
}
