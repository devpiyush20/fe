// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
  helloGeoTech,
  undualAnalytics,
  cab,
  money
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  }
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Software Developer Intern",
    company_name: "Hello Geo Tech Pvt. Ltd.",
    icon: helloGeoTech, // Placeholder icon, replace with actual import
    iconBg: "#383E56",
    date: "Oct 2024 - Feb 2025",
    points: [
      "Developed an eCommerce platform (8trees.life) using Next.js and SWR for efficient data fetching, caching, and revalidation.",
      "Built a high-performance React Native app with Zustand for state management and TanStack Query for server synchronization, available on Google Play.",
      "Created modular Admin and Vendor Panels with React.js, Redux Toolkit, and React Query for seamless API integration.",
      "Integrated Strapi CMS with GraphQL and REST APIs, optimizing workflows and access control.",
      "Enhanced frontend performance using tree-shaking, code-splitting, dynamic imports, and tools like React Profiler and Lighthouse.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Undual Analytics",
    icon: undualAnalytics, // Placeholder icon, replace with actual import
    iconBg: "#E6DEDD",
    date: "Mar 2024 - Jun 2024",
    points: [
      "Developed high-performance UIs for a digital gold platform using React, JavaScript, and Tailwind CSS.",
      "Designed responsive and intuitive components with Figma, ensuring device-agnostic user experiences.",
      "Optimized frontend performance through lazy loading, code-splitting, and efficient asset handling.",
      "Integrated RESTful APIs using Axios for seamless data synchronization and error handling.",
      "Conducted usability testing and iterated on feedback to improve UI accessibility and engagement.",
    ],
  },
] as const;
// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Cab Rental Web-App",
    description:
      "· Implemented seamless Payment Gateway integration for secure transactions. Designed a user-friendly admin panel, improving booking and package management efficiency by 50%. Applied advanced password encryption techniques to enhance data security.Developed OTP verification for secure user communication with cab drivers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: cab,
    source_code_link: "https://github.com/sanidhyy/disney-clone",
    live_site_link: "https://dwiveditourstravels.in/",
  },
  {
    name: " CRM Web-App ",
    description:
      "developed a CRM Web-App from scratch which completely shifted the mode of working of their employees from Excel Sheets to Web-App. This is a fully responsive Web-App which uses the popular MERN-Stack. They used Excel sheets containing 5000-10000 mobile numbers and used to call each one and then fill the details on that particular mobile number i.e whether they picked the call or not, filling the next date the customer asks for a call back and remembering it as well etc. Admin faced another kind of issue, they used to transfer the complete excel sheets which contained numbers of people who might be potential customers for the organization and employees after the training period used to run-away with complete sheets and used to work independently which caused the organization a lot of financial losses. One has to differentiate between the newer and older sheets and sheets which had more refined mobile numbers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: money,
    source_code_link: "",
    live_site_link: "https://www.linkedin.com/feed/update/urn:li:activity:7085165494617468928/",
  }
] as const;

export const SOCIALS = [

  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/dev-piyush20/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/devpiyush20",
  },
] as const;
