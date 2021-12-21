import { Component } from "@angular/core";
import { portfolioItems } from "src/app/data/portfolio-data";
import { PortfolioItem } from "src/app/models/portfolio-models";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"]
})
export class PortfolioComponent {

  public items: PortfolioItem[] = portfolioItems;

}
