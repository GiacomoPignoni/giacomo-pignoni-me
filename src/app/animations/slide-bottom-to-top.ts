import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideBottomToTop = [
  style({ position: "relative" }),
  query(":enter, :leave", [
    style({
      position: "absolute",
      top: 0,
      width: "100%"
    })
  ]),
  query(":enter", [
    style({ top: "100%" })
  ]),
  query(":leave", animateChild()),
  group([
    query(":leave", [
      animate("300ms ease-out", style({ top: "-100%" }))
    ]),
    query(":enter", [
      animate("300ms ease-out", style({ top: "0%" }))
    ])
  ]),
  query(":enter", animateChild()),
];
