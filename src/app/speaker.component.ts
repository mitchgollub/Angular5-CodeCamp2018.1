import { Component, Input, OnInit } from "@angular/core";

import { DataService } from "./dataservice";
import { Speaker } from "./speaker";

@Component({
  selector: "speaker",
  template: `
  <section>
    <ul>
      <li *ngFor="let speaker of speakers">
        <div>{{speaker.fullName}}</div>
        <div>{{speaker.tagLine}}</div>
        <div>{{speaker.sessions.length}}</div>
      </li>
    </ul>
  </section>
  `,
  styles: [
    `section {
    background-color: lightgreen;
    padding: 10px;
		height: calc(100vh - 91px);
    overflow-y: auto;
}

ul {
  list-style-type: none;
}

li {
  display: flex;
}

li > div {
  flex: 0 0 200px;
}

li > div:nth-child(2) {
  flex: 0 0 600px;
}

li > div:nth-child(3) {
  flex: 0 0 75px;
}
`
  ]
})
export class SpeakerComponent implements OnInit {
  speakers: Speaker[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.speakers = this.dataService.getSpeakers();
  }
}
