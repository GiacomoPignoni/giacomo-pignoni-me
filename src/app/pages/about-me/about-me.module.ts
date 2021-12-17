import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutMeComponent } from "./about-me.component";
import { RouterModule, Routes } from "@angular/router";

const ROUTES: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: AboutMeComponent
  }
];

@NgModule({
  declarations: [
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class AboutMeModule { }
