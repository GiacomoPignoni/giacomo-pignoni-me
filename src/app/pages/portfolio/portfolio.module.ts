import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PortfolioComponent } from "./portfolio.component";
import { RouterModule, Routes } from "@angular/router";
import { PortfolioDetailsComponent } from "./portfolio-details/portfolio-details.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

const ROUTES: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: PortfolioComponent
  },
  {
    path: "details/:index",
    component: PortfolioDetailsComponent
  }
];

@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MatIconModule,
    MatButtonModule
  ]
})
export class PortfolioModule { }
