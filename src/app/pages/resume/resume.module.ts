import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ResumeComponent } from "./resume.component";
import { RouterModule, Routes } from "@angular/router";

const ROUTES: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: ResumeComponent
  }
];

@NgModule({
  declarations: [
    ResumeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ResumeModule { }
