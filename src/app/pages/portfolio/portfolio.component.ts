import { Component, HostBinding } from "@angular/core";
import { Router } from "@angular/router";
import { categories, portfolioItems } from "src/app/data/portfolio-data";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
})
export class PortfolioComponent {
  categories = categories;
  portfolioItems = portfolioItems;

  @HostBinding("class.page") pageClass: boolean = true;

  selectedCategory: string = categories[0];

  constructor(
    private readonly router: Router
  ) {
    //
  }

  selectCategory(newCategory: string): void {
    this.selectedCategory = newCategory;
    if (newCategory === "All") {
      this.portfolioItems = portfolioItems;
    } else {
      this.portfolioItems = portfolioItems.filter(x => x.categories.includes(newCategory));
    }
  }

  goToDetails(index: number) {
    this.router.navigateByUrl(`portfolio/details/${index}`);
  }
}
