import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Learning-Angular';
  loginform = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(5)]), //default value Masum
    userPass: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9\_\-]{3,29}$'), Validators.minLength(8)])
  })

  loginForm01() {
    console.warn(this.loginform.value);
  }

  get userName() {
    return this.loginform.get('userName')
  }

  get userPass() {
    return this.loginform.get('userPass')
  }
}
