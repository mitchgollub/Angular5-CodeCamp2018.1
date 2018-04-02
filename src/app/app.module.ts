import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { MainComponent } from "./main.component";
import { RoutingModule } from "./routing.module";
import { FooterComponent } from "./footer.component";
import { HeaderComponent } from "./header.component";
import { CampComponent } from "./camp.component";
import { ScheduleComponent } from "./schedule.component";
import { SessionComponent } from "./session.component";
import { SpeakerComponent } from "./speaker.component";
import { SponsorComponent } from "./sponsor.component";
import { DataService } from "./dataservice";

@NgModule({
  imports: [BrowserModule, FormsModule, RoutingModule],
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    CampComponent,
    ScheduleComponent,
    SessionComponent,
    SpeakerComponent,
    SponsorComponent
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
