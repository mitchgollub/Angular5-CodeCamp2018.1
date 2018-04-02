import { Component, Input, OnInit } from "@angular/core";

import { DataService } from "./dataservice";
import { Schedule } from "./schedule";

@Component({
  selector: "schedule",
  template: `
  <section>
    <div *ngFor="let schedule of schedules">
      <h2>{{schedule.date | date}}</h2>
      <ul>
        <li *ngFor="let room of schedule.rooms">
          <div class='room'>{{room.name}}</div>
          <ul>
            <li *ngFor="let session of room.sessions">
              <div class='title'>{{session.title}}</div>
              <div class='speaker'>{{session.speakers[0].name}}</div>
              <div class='time'>{{session.startsAt | date:'h:mmaaaaa'}}</div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
  `,
  styles: [
    `section {
    background-color: lightblue;
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

.room {
  flex: 0 0 100px;
}

.title {
  flex: 0 0 500px;
}

.speaker {
  flex: 0 0 200px;
}
`
  ]
})
export class ScheduleComponent implements OnInit {
  schedules: Schedule[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.schedules = this.dataService.getSchedules();
  }
}
