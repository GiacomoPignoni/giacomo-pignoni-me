import { Component, HostBinding } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent {
  @HostBinding("class.page") pageClass: boolean = true;
}
