import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PortfolioComponent } from "./portfolio.component";
import { RouterModule, Routes } from "@angular/router";

const ROUTES: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: PortfolioComponent
  }
];

@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class PortfolioModule { }
