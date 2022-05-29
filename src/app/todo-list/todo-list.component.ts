import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    if (this.email.hasError('email')) {
      return 'Not a valid email';
    }
    return this.email.hasError('minLength') ? 'Looks Suspicious Task...' : '';
  }

  list01: any[] = []

  addTask(mail: string) {
    this.list01.push({id: this.list01.length, email: mail})
  }

  removeTask(id: number,item:any) {
    // this.list01 = this.list01.splice(this.list01.indexOf(item),1)
    this.list01 = this.list01.filter(item => item.id !== id)
  }
}
