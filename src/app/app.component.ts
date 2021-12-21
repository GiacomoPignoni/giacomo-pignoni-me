import { Component, ElementRef, ViewChild } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { appComponentAnimations } from "./app.component.animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: appComponentAnimations
})
export class AppComponent {

  @ViewChild("sidebarContainer") sidebarContainer: ElementRef | undefined;

  public sidebarOpened: boolean = false;

  public toggleSidebar() {
    this.sidebarOpened = this.sidebarContainer?.nativeElement.classList.toggle("active");
  }

  public prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.["animation"];
  }
}
