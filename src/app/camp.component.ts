import { Component } from "@angular/core";

@Component({
  selector: "camp",
  template: `
  <section>
    <h1>{{slogan}}</h1>
  </section>`,
  styles: [
    `
  section {
    background-color: cyan;
    padding: 10px;
		height: calc(100vh - 91px);
  }`
  ]
})
export class CampComponent {
  slogan = "philly.NET Code Camp 2018.1";
}
