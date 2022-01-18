import { Component, HostBinding } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { portfolioItems } from "src/app/data/portfolio-data";
import { PortfolioItem } from "src/app/models/portfolio-models";

@Component({
  selector: "app-portfolio-details",
  templateUrl: "./portfolio-details.component.html",
  styleUrls: ["./portfolio-details.component.scss"]
})
export class PortfolioDetailsComponent {

  @HostBinding("class.page") pageClass: boolean = true;

  portfolioItem: PortfolioItem;

  currentImageIndex: number = 0;

  get firstWord(): string {
    return this.portfolioItem?.title.split(" ")[0];
  }

  get otherWord(): string {
    return this.portfolioItem?.title.replace(this.firstWord, "");
  }

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    const portfolioItemIndex = this.route.snapshot.params["index"];
    this.portfolioItem = portfolioItems[portfolioItemIndex];
  }

  goBack(): void {
    this.router.navigateByUrl("portfolio");
  }

  nextImage() {
    this.currentImageIndex = Math.min(this.currentImageIndex + 1, this.portfolioItem.images.length - 1);
  }

  beforeImage() {
    this.currentImageIndex = Math.max(this.currentImageIndex - 1, 0);
  }
}
