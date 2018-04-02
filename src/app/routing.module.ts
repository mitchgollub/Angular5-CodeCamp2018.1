import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CampComponent } from "./camp.component";
import { ScheduleComponent } from "./schedule.component";
import { SessionComponent } from "./session.component";
import { SpeakerComponent } from "./speaker.component";
import { SponsorComponent } from "./sponsor.component";

const routes: Routes = [
  { path: "", component: CampComponent },
  { path: "schedule", component: ScheduleComponent },
  { path: "session", component: SessionComponent },
  { path: "speaker", component: SpeakerComponent },
  { path: "sponsor", component: SponsorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule {}
