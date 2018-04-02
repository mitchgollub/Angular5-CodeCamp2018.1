import { Injectable } from "@angular/core";

import { Speaker } from "./speaker";
import { Session } from "./session";
import { Schedule } from "./schedule";
import { Sponsor } from "./sponsor";

var speakerData = require("../assets/speaker.json");
var sessionData = require("../assets/session.json");
var scheduleData = require("../assets/schedule.json");
var sponsorData = require("../assets/sponsor.json");

@Injectable()
export class DataService {
  getSpeakers(): Speaker[] {
    return speakerData;
  }
  getSessions(): Session[] {
    return sessionData[0].sessions;
  }
  getSchedules(): Schedule[] {
    return scheduleData;
  }
  getSponsors(): Sponsor[] {
    return sponsorData;
  }
}
