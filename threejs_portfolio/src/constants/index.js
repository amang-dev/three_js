export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];


export const myProjects = [
  {
    title: "NetFlix-Gpt - AI Movie Search Platform",
    desc: "NetFlix-GPT is an AI-driven movie discovery platform that enhances how users search and explore films. With intelligent recommendations and a seamless user experience, it simplifies content discovery through real-time suggestions and natural language queries.",
    subdesc:
      "Built using React.js, JavaScript, Tailwind CSS, and Firebase for authentication, NetFlix-GPT delivers a fast, secure, and responsive interface optimized for both performance and scalability.",
    href: "https://movie-gpt-woad.vercel.app/",
    texture: "/textures/project/netflix.mp4",
    // logo: "/assets/project-logo1.png",
    logo: "https://toppng.com/uploads/preview/netflix-logo-png-11593869496jqso5gxgsy.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/javascript1.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Swiggy Clone",
    desc: "Swiggy Clone is a food delivery web application that replicates core features of the original platform. It fetches real-time restaurant and menu data using Swiggy’s live API, offering users a seamless and interactive browsing experience",
    subdesc:
      "Built with React.js, JavaScript, Tailwind CSS, HTML, and CSS, the application is fully responsive and optimized for performance, delivering a smooth user interface across all devices.",
    href: "https://food-villa-teal.vercel.app/",
    texture: "/textures/project/swiggy.mp4",
    logo: "https://w7.pngwing.com/pngs/55/100/png-transparent-swiggy-hd-logo-thumbnail.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/javascript.png",
      },
      
    ],
  },
 
 
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -6, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-15, -13, -20],

    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Delta India",
    pos: "Front-end Developer",
    duration: "2023 - Present",
    title:
      "Designd and developed modern digital solutions with creative problem solving & design thinking techniques using latest technologies & trends.",
    icon: "/assets/delta.png",
    animation: "victory",
  },
  
];
