import { ajc, sogeti, css, html, javascript, github, nodejs, react, threejs } from '../../public/assets/index';

const projects = {
  "content": [
    {
      "title": "ResumeGen",
      "info": "Resume Builder with Neumorphic UI utilizing React (hooks), React-pdf, and Node.",
      "imageSrc": ""
    },
    {
      "title": "Pixel Smash",
      "info": "Pixel-Smash is a fun, yet competitive , JavaScript-powered platform fighter where you can test your mettle against online players or the relentless CPU.",
      "imageSrc": ""
    },
    {
      "title": "ReactJS Portfolio",
      "info": "Exprimental react portfolio I built in 2019 imbued with colorful transitions, parallaxed spheres, and ocean waves.",
      "imageSrc": ""
    },
    {
      "title": "Ad-Vision",
      "info": "A ViroReact augmented reality app that renders content on screen.",
      "imageSrc": ""
    },
    {
      "title": "Mongo Scraper",
      "info": "JavaScript-powered web scraper that scrapes articles from https://www.space.com/ and allows the user to save their favorites.",
      "imageSrc": ""
    },
    {
      "title": "GIPHY-APP",
      "info": "",
      "imageSrc": ""
    },
    {
      "title": "Bamazon",
      "info": "",
      "imageSrc": ""
    }
  ]
};

const work = {
  content: [
    {
      title: "Capgemini Sogeti",
      roleName: "Angular Developer - IT Consultant",
      date: "April 2019 - Sept 2019",
      icon: sogeti,
      points: [
        "Developed app landing page, dashboards, and other UI components using Angular, TypeScript, and SASS on a enterprise Spring Boot application for a cable television company.",
        "Worked closely with Lead UX Designer in identifying UI defects and implementing solutions.",
        "Collaberated with offshore backend engineers on integrating API services with the frontend"
      ]
    },
    {
      title: "Atlanta Journal-Constitution",
      roleName: "Web Developer II",
      date: "Sept 2019 - Feb 2023",
      icon: ajc,
      points: [
        "Rebuilt AJC’s site using React components as part of their integration with ARC XP - a cloud-based CMS developed by Amazon.",
        "Worked closely with UX Designers in modernizing user experience and responsive interfaces for AJC and other Cox Enterprise-owned websites.",
        "Resolved defects, implemented feature metrics tracking and developed multimedia features using React hooks for sites that receive thousands of unique visitors a day.",
        "Participated in code reviews and provided constructive feedback for team members",
        "Collaborated with QA, Product Owners, and Project Managers in discussing new features, JIRA tickets, and existing bugs."
      ]
    },
  ]
};

export { projects, work };
