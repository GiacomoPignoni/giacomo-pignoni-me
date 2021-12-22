import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideTopToBottom = [
  style({ position: "relative" }),
  query(":enter, :leave", [
    style({
      position: "absolute",
      top: 0,
      width: "100%"
    })
  ], { optional: true }),
  query(":enter", [
    style({ top: "-100%" })
  ], { optional: true }),
  query(":leave", animateChild(), { optional: true }),
  group([
    query(":leave", [
      animate("300ms ease-out", style({ top: "100%" }))
    ], { optional: true }),
    query(":enter", [
      animate("300ms ease-out", style({ top: "0%" }))
    ], { optional: true })
  ]),
  query(":enter", animateChild(), { optional: true }),
];
