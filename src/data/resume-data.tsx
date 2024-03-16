import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Trần Việt Vương",
  initials: "BJ",
  location: "Wrocław, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Back-End Developer Engineer focused on building products with extra attention to detail",
  summary:
    "Detail-oriented and enthusiastic Web Developer IT Intern with a strong passion for coding and web development. Currently pursuing a degree in IT. Possesses a solid foundation in front-end and back-end web development technologies, including HTML, CSS, JavaScript, JAVA, Spring MVC. Proactive and eager to contribute to innovative web development projects while gaining practical experience and expanding skills in the IT industry",
  avatarUrl: "https://private-user-images.githubusercontent.com/105685671/312838777-f306d255-41c0-47b9-97dd-d08685f774ab.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTA1Njc4OTksIm5iZiI6MTcxMDU2NzU5OSwicGF0aCI6Ii8xMDU2ODU2NzEvMzEyODM4Nzc3LWYzMDZkMjU1LTQxYzAtNDdiOS05N2RkLWQwODY4NWY3NzRhYi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMxNlQwNTM5NTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05NzM0NTYxN2EzY2M5YjEzMzY3YTZhZThhNGZkMzllNGFlOWJjYjQyYjcwZmQzNTYwMjVhMjQ0ZTNjNDU5NzVkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.VKVv5uSAHIDuTs_Bp1_rixbo8-sd73Zp5sVWrvxAXGo",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "hoivui7a@gmail.com",
    tel: "+84386602039",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/littlebadboy9x",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tran-viet-vuong-238776229/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/vuongtv171",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "FPT Polytechnic",
      degree: "Bachelor’s degree in Software Applications.",
      start: "1/2021",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Workshop of the school project.",
      link: "ap.poly.edu.vn",
      badges: ["onsite"],
      title: "Senior Full Stack Developer",
      logo: ParabolLogo,
      start: "2022",
      end: "2023",
      description:
        "Developed new features and proposed ideas, as well as improved existing functionality. Technologies: Java Spring.",
    },
  ],
  skills: [
    "Java Spring",
    "RESTful API Development",
    "Database Interaction(Firebase, MongoDB, SQLServer)",
    "VueJs",
    "Docker(currently studying)",
    "DevOps(currently studying)",
  ],
  projects: [
    {
      title: "Web Store",
      techStack: [
        "Spring Boot",
        "RESTful API",
        "Spring JPA",
        "Themeleaf",
        "SQlServer",
        "Spring Security",
      ],
      description: "A platform to build and grow your online interior business.",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
  ],
} as const;
