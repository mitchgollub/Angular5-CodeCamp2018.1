import { Component, Input } from "@angular/core";

@Component({
  selector: "page-footer",
  template: `<footer>{{name}}</footer>`,
  styles: [
    `footer {
    background-color: lightsalmon;
    height: 15px;
    padding-left: 10px;
    font-size: small;
  }`
  ]
})
export class FooterComponent {
  @Input() name: string;
}
