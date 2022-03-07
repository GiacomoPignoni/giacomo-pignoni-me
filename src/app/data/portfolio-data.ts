import { PortfolioItem } from "src/app/models/portfolio-models";

export const categories: string [] = ["All", "Side Project", "Work", "Open Source"];

export const portfolioItems: PortfolioItem[] = [
    {
        date: "Jan 1, 2022",
        cover: "assets/images/modi/cover.png",
        images: [
            "/assets/images/modi/phone_1.png",
            "/assets/images/modi/phone_2.png",
            "/assets/images/modi/phone_3.png",
            "/assets/images/modi/phone_4.png",
        ],
        link: "https://modi-app.online",
        technologies: ["Flutter", "Firebase", "NodeJS"],
        text: `Modi, a mood diary!<br>
            Write notes every day and read them after 1 year!<br>
            You can also unlock some notes using in app tokens that you can earn by using the app 7 days in a row.<br>
            You can also have partner!<br>
            A partner is someone who can see your mood calendar and your unlocked notes!<br>
            Download the app and track how moody you are!
        `,
        title: "Modi - Mood Diary",
        categories: ["Side Project"]
    },
    {
        date: "Sep 10, 2021",
        cover: "assets/images/automotive-dealer-day/cover.png",
        images: [
            "/assets/images/automotive-dealer-day/phone_1.png",
            "/assets/images/automotive-dealer-day/phone_2.png",
            "/assets/images/automotive-dealer-day/phone_3.png",
        ],
        link: "https://apps.apple.com/us/app/automotive-dealer-day/id640269775",
        technologies: ["Flutter", "REST API"],
        text: `I made an app with Flutter for the Automotive Dealer day.<br>
            My task was to follow the given UI design and they also give to me the rest api to get the data.<br>
            The app is a showcase of all the speakers and the workshop.<br>
            A user can book a workshop and also he can scan other user badge to get his contact information.<br>
            With an admin user the app can also scan user badge to know if the user can enter in the exhibition and also can show fi a user booked a workshop.<br>
            The app can also show push notification using Firebase Messaging
        `,
        title: "Automotive Dealer Day App",
        categories: ["Work"]
    },
    {
        date: "Apr 15, 2021",
        cover: "assets/images/habits-diary/cover.png",
        images: [
            "/assets/images/habits-diary/phone_1.png",
            "/assets/images/habits-diary/phone_2.png",
            "/assets/images/habits-diary/phone_3.png",
            "/assets/images/habits-diary/phone_4.png",
            "/assets/images/habits-diary/phone_5.png",
        ],
        link: "https://github.com/GiacomoPignoni/habits_diary",
        technologies: ["Flutter"],
        text: `Habits Diary it’s a simple habits tracker.<br>
            The Habits Diary’s calendar it’s inspired by the GitHub contributions board, more colored is a day more you have done. It’s a very good way to show some results over a long period.<br>
            Habit Diary it’s very fast, smooth and funny to use. It’s made with Flutter and it’s an open source project
        `,
        title: "Habits Diary",
        categories: ["Side Project", "Open Source"]
    },
    {
        date: "Feb 1, 2022",
        cover: "assets/images/giacomo-pignoni-website/cover.png",
        images: [
            "/assets/images/giacomo-pignoni-website/desktop_1.png",
            "/assets/images/giacomo-pignoni-website/desktop_2.png"
        ],
        link: "https://github.com/GiacomoPignoni/giacomo-pignoni-me",
        technologies: ["Angular"],
        text: "This website is also made by me and the code is public on GitHub",
        title: "Giacomo Pignoni Website",
        categories: ["Side Project", "Open Source"]
    },
];
