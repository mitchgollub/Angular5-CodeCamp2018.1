import { Component, Input } from "@angular/core";

@Component({
  selector: "page-header",
  template: `
  <header>
    <nav>
      <ul>
        <li [routerLink]="['/']">Camp
        </li>
        <li [routerLink]="['/schedule']">Schedule
        </li>
        <li [routerLink]="['/session']">Session
        </li>
        <li [routerLink]="['/speaker']">Speaker
        </li>
        <li [routerLink]="['/sponsor']">Sponsor
        </li>
      </ul>
    </nav>
  </header>`,
  styles: [
    `
  header {
    height: 40px;
  }

  nav > ul > li {
    border: 0;
    background: #0271bc;
    padding: 5px 10px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    outline: 0;
    width: 5em;
    display: inline-block;
    margin-right: 10px;
  }

  nav > ul > li > a {
    text-decoration: none;
    color: white;
  }`
  ]
})
export class HeaderComponent {}
