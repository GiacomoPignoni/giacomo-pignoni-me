import { ResumeSkill, ResumeWork } from "../models/resume-models";

export const skills: ResumeSkill[] = [
  { name: "HTML & CSS", percentage: 95 },
  { name: "Javascript", percentage: 90 },
  { name: "Angular", percentage: 85 },
  { name: "Flutter", percentage: 80 },
  { name: "Dart", percentage: 75 },
  { name: "C#", percentage: 70 },
  { name: ".NET Core", percentage: 60 }
];

export const works: ResumeWork[] = [
  {
    time: "Sep 2021 - Present",
    company: "Digitalminds",
    title: "Full Stack Developer",
    text: `
    Develop web application and mobile application
      <br> &nbsp - Angular
      <br> &nbsp - Flutter
      <br> &nbsp - .NET Core
      <br> &nbsp - SQL Server 
    `
  },
  {
    time: "Mar 2019 - Sep 2021",
    company: "Reti S.p.A.",
    title: "Full Stack Developer",
    text: `
    Develop web application
      <br> &nbsp - Angular
      <br> &nbsp - .NET Core
      <br> &nbsp - SQL Server 
    `
  }
];

export const knowledges: string[] = ["Flutter", "Angular", "UI Design", "Firebase", "Node JS", "iOS app deploy", "Android app deploy"];
