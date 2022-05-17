import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-address',
  template: `
    <p class="custom-inline-template">
      our-address works! {{"{"}}inline template}
    </p>
  `,
  styleUrls: ['./our-address.component.css']
})
export class OurAddressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
