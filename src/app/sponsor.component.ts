import { Component, Input, OnInit } from "@angular/core";

import { DataService } from "./dataservice";
import { Sponsor } from "./sponsor";

@Component({
  selector: "sponsor",
  template: `
  <section>
    <ul>
      <li *ngFor="let sponsor of sponsors">
        <div>{{sponsors.name}}</div>
        <div>{{sponsors.level}}</div>
        <div>{{sponsors.logo}}</div>
      </li>
    </ul>
  </section>
  `,
  styles: [
    `section {
    background-color: lightsalmon;
    padding: 10px;
		height: calc(100vh - 91px);
  }`
  ]
})
export class SponsorComponent implements OnInit {
  sponsors: Sponsor[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.sponsors = this.dataService.getSponsors();
  }
}
