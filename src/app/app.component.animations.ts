import { transition, trigger } from "@angular/animations";
import { slideBottomToTop } from "./animations/slide-bottom-to-top";
import { slideTopToBottom } from "./animations/slide-top-to-bottom";

export const appComponentAnimations = [
    trigger('routeAnimations', [
      transition('HomePage => *', slideBottomToTop),

      transition('AboutPage => HomePage', slideTopToBottom),
      transition('AboutPage => ResumePage', slideBottomToTop),
      transition('AboutPage => PortfolioPage', slideBottomToTop),
      transition('AboutPage => ContactPage', slideBottomToTop),

      transition('ResumePage => HomePage', slideTopToBottom),
      transition('ResumePage => AboutPage', slideTopToBottom),
      transition('ResumePage => PortfolioPage', slideBottomToTop),
      transition('ResumePage => ContactPage', slideBottomToTop),

      transition('PortfolioPage => HomePage', slideTopToBottom),
      transition('PortfolioPage => AboutPage', slideTopToBottom),
      transition('PortfolioPage => ResumePage', slideTopToBottom),
      transition('PortfolioPage => ContactPage', slideBottomToTop),

      transition('ContactPage => *', slideTopToBottom),
    ]),
];
