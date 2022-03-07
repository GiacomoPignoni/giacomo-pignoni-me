import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    loadChildren: () => import("src/app/pages/home/home.module").then(m => m.HomeModule),
    data: { animation: "HomePage" }
  },
  {
    path: "about-me",
    loadChildren: () => import("src/app/pages/about-me/about-me.module").then(m => m.AboutMeModule),
    data: { animation: "AboutPage" }
  },
  {
    path: "resume",
    loadChildren: () => import("src/app/pages/resume/resume.module").then(m => m.ResumeModule),
    data: { animation: "ResumePage" }
  },
  {
    path: "portfolio",
    loadChildren: () => import("src/app/pages/portfolio/portfolio.module").then(m => m.PortfolioModule),
    data: { animation: "PortfolioPage" }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, initialNavigation: "enabledBlocking" })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
