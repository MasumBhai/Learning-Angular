import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Learning-Angular';
  isLinear = false;
  firstFormGroup: FormGroup | any;
  secondFormGroup: FormGroup | any;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

// child to parent
  data = 10;
  userDetails = [
    {name:'MasumMisT',email:'201914044@student.mist.ac.bd'},
    {name:'Abdullah',email:'abdullah6035@gmail.com'},
    {name:'Abdullah Al Masum',email:'bekarMasum@gmail.com'},
    {name:'Masum',email:'abdullahmasum6035@gmail.com'},
    {name:'MasumTheGreat',email:'notSoGreat@gmail.com'},
    {name:'MasumBhai',email:'masumThechotoBhai@gmail.com'},
    {name:'MasumTheHero',email:'masumhero420@gmail.com'},
  ];

  update_child() {
    this.data = Math.floor(Math.random() * 1000)
  }
}
