import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent {

  @Output() linkClick: EventEmitter<void> = new EventEmitter();

  public onLinkClicked() {
    this.linkClick.emit();
  }
}
