import { Component, HostBinding } from "@angular/core";
import { knowledges, skills, works } from "src/app/data/resume-data";

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.scss"]
})
export class ResumeComponent {
  works = works;
  skills = skills;
  knowledges = knowledges;

  @HostBinding("class.page") pageClass: boolean = true;
}
