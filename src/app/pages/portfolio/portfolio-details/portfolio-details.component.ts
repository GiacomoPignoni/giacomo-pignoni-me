import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { portfolioItems } from "src/app/data/portfolio-data";
import { PortfolioItem } from "src/app/models/portfolio-models";

@Component({
  selector: "app-portfolio-details",
  templateUrl: "./portfolio-details.component.html",
  styleUrls: ["./portfolio-details.component.scss"]
})
export class PortfolioDetailsComponent {

  portfolioItem: PortfolioItem;

  constructor(
    private readonly route: ActivatedRoute
  ) {
    const portfolioItemIndex = this.route.snapshot.data["index"];
    this.portfolioItem = portfolioItems[portfolioItemIndex];
  }
}
