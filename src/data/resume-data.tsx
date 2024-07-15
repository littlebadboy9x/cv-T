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
  initials: "TVV",
  location: "Minh Khai, Bắc Từ Liêm, Hà Nội",
  locationLink: "https://maps.app.goo.gl/MgZaWcXKQFX5R7bS7",
  about:
    "Back-End Developer Engineer focused on building products with extra attention to detail",
  summary:
    "Detail-oriented and enthusiastic Web Developer IT Intern with a strong passion for coding and web development. Currently pursuing a degree in IT. Possesses a solid foundation in front-end and back-end web development technologies, including HTML, CSS, JavaScript, JAVA, Spring MVC. Proactive and eager to contribute to innovative web development projects while gaining practical experience and expanding skills in the IT industry",
  avatarUrl: "https://i.imgur.com/cBxU1V5.jpeg",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "vuongtv1267.dev@gmail.com",
    tel: "+84386602039",
    github: "https://github.com/littlebadboy9x",
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
      company: "Workshop of the school project",
      link: "ap.poly.edu.vn",
      badges: ["onsite"],
      title: "Back-End Developer",
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
        "JavaScript",
        "SQlServer",
        "Spring Security",
      ],
      description: "A platform to build and grow your online interior business.",
      logo: ConsultlyLogo,
      link: {
        label: "https://github.com/littlebadboy9x/WebStoreX",
        href: "https://github.com/littlebadboy9x/WebStoreX",
      },
    },
    {
      title: "BeeShops Application",
      techStack: [
        "Java Swing",
        "Java Mail",
        "Hibernate",
        "Themeleaf",
        "SQlServer",
      ],
      description: "The software is created for efficient management and sales at the counter.",
      logo: ConsultlyLogo,
      link: {
        label: "https://github.com/littlebadboy9x/BeeShops_GiayN4",
        href: "https://github.com/littlebadboy9x/BeeShops_GiayN4",
      },
    },
  ],
} as const;
