import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list',
  template: `
    <p class="custom-inline-template-inline-style">
      country-list works {{"{"}}inline-style --inline-template}!
    </p>
  `,
  styles: [
      `.custom-inline-template-inline-style{
        color: darkorange;
      }`
  ]
})
export class CountryListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
