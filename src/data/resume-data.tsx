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
  name: "Vũ Anh Tú",
  initials: "VAT",
  location: "Minh Khai, Bắc Từ Liêm, Hà Nội",
  locationLink: "https://maps.app.goo.gl/MgZaWcXKQFX5R7bS7",
  about:"",
  summary:
    "Tôi đã đã tốt nghiệp cấp 3 và từng theo học đại học, tuy nhiên sau đó quyết định dừng lại giữa chừng để tìm kiếm con đường phù hợp với bản thân. Tôi có niềm đam mê lớn với bộ môn cầu lông và đã gắn bó với môn thể thao này suốt 7 năm qua. Với định hướng rõ ràng trong lĩnh vực thể thao, đặc biệt là cầu lông, tôi mong muốn được phát triển bản thân một cách nghiêm túc và bền vững. Tôi tin rằng niềm đam mê cùng kinh nghiệm tích lũy sẽ là nền tảng vững chắc để tôi theo đuổi và đóng góp cho lĩnh vực này trong tương lai.",
  avatarUrl: "https://i.postimg.cc/g2svNq05/z6687426771463-ecceed593fe887dd0e75295c46bd8359.jpg",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "tuvu2892@gmail.com",
    tel: "+84356739974",
    github: "#",
    social: [
      {
        name: "GitHub",
        url: "#",
        icon: GitHubIcon,
      },
      {
        name: "TikTok",
        url: "#",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "#",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Đại Học Công Nghiệp Việt Trì",
      degree: "Cử nhân Công Nghệ Ô Tô",
      start: "8/2020",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Shop Cầu Lông",
      link: "#",
      badges: ["onsite"],
      title: "Hỗ trợ bán hàng",
      logo: ParabolLogo,
      start: "1/2024",
      end: "5/2025",
      description:
        "Hỗ trợ bán hàng tại cửa hàng cầu lông, tư vấn và cung cấp thông tin sản phẩm cho khách hàng.",
    },
  ],
  skills: [
    "Dạy cầu lông",
    "Tư vấn và bán hàng",
    "Quản lý kho hàng",
    "Giao tiếp và tư vấn khách hàng",
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
