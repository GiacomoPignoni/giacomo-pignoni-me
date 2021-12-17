import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  @ViewChild("sidebarContainer") sidebarContainer: ElementRef | undefined;

  sidebarOpened: boolean = false;

  toggleSidebar() {
    this.sidebarOpened = this.sidebarContainer?.nativeElement.classList.toggle("active");
  }
}
