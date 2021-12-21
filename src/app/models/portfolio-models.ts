export enum PortfolioCategory {
    openSource = 0,
    freelance = 1,
    sideProject = 2
}

export interface PortfolioItem {
    categories: PortfolioCategory[];
    title: string;
    text: string;
    imagePath: string;
}