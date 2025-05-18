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
    desi,
    mimeda,
    fsm,
    sap,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    c,
    bootstrap,
    flask,
    java,
    oracle,
    php,
    py,
    vue,
  } from "../assets";

  import{mimeda}  from "../assets/company";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Data Analysis",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Computer Vision",
      icon: creator,
    },
  ];
  
  const technologies = [

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
      name: "c",
      icon: c,
    },
    {
      name: "flask",
      icon: flask,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "oracle",
      icon: oracle,
    },
    {
      name: "php",
      icon: php,
    },
    {
      name: "py",
      icon: py,
    },
    {
      name: "vue",
      icon: vue,
    },
  ];
  
  const experiences = [
        {
      title: "Web Developer",
      company_name: "MIGROS MEDIA DATA-MIMEDA",
      icon: mi,
      iconBg: "#383E56",
      date: "DECEMBER 2024- MAY 2025",
      points: [
        "Developed responsive front-end interfaces using ASP.NET MVC architecture, improving page load time by 70% through optimized rendering and asset management.",
        "Designed and implemented back-end services using Microsoft Azure, reducing downtime by 80% and improving deployment efficiency.",
        "Built modern and responsive UI with HTML5, CSS3, and JavaScript, following UX/UI best practices.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
            {
      title: "Computer Vision Developer",
      company_name: "MEGA MERCHANT",
      icon: mi,
      iconBg: "#383E56",
      date: "",
      points: [
        "Developed AI-based solutions for cleaning, resizing, and whitening backgrounds of fashion product images.",
        "Researched automating the process of applying the ghost mannequin effect to clothing images.",
        "Deployed processing images to AWS and generated structured Excel reports for tracking results and used OpenPose and deep learning-based segmentation techniques to detect the front and back sides of garments.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "SAPIENZA UNIVERSITY OF ROME",
      icon: sap,
      iconBg: "#383E56",
      date: "July 2023- June 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Dedicated and experienced full-stack developer with expertise in web development technologies. Successfully designed and developed a virtual screening server for drug repurposing using HTML, CSS, JavaScript, Bootstrap, and PHP. Adept at creating efficient, user friendly, and secure web applications. Seeking opportunities to contribute my skills and knowledge to innovative projects in the field of pharmaceutical research and web development. ",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Web  Developer Intern",
      company_name: "DESI SECURITY &LOCK SYSTEMS",
      icon: desi,
      iconBg: "#E6DEDD",
      date: "August 2023 - September 2023",
      points: [
        "Developing and maintaining web applications using Vue.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Developed the company front-end website project of desisteely.com for admins and users  by using Vue.js.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "UNDERGRADUATE TEACHING ASSISTANT",
      company_name: "FSMVU",
      icon: fsm,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Focuses on the  frame analysis and programming using the Java swing and javax with +80 students.",
        "Focuses on developing applications on C and C++ with +150 students",
        "Filling forms about Bologna for each lecture in computer engineering ",
      ],
    },
    {
      title: "Front-end  Developer",
      company_name: "Group Taiga",
      icon: apple,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "To design the website of Lamila which is a site design construction company ( lamilayalova.com",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website  as beautiful as our product, but Merve proved me wrong.",
  //     name: "Selin Yilmaz",
  //     designation: "CFO",
  //     company: "Group Taiga",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Merve does.",
  //     name: "Selman Yilmaz",
  //     designation: "CEO",
  //     company: "Group Taiga",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },

  // ];
  
  const projects = [
        {
      name: "Dominant Color Detection with Fashion Garments",
      description:
        "This project aims to automatically detect the dominant color in fashion garments using image processing and machine learning techniques. By analyzing clothing images, the system identifies the most prominent color, which can be used for fashion search etc.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "machine-learning",
          color: "green-text-gradient",
        },
        {
          name: "AI",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/mervelil/graduation",
    },
    {
      name: "Car Rent",
      description:
        "Java-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "swing",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/mervelil/Car-Rental-System",
    },
    {
      name: "Fortune 2000 Data Mining",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "kaggle",
          color: "green-text-gradient",
        },
        {
          name: "ipynb",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/mervelil/Data-mining/blob/main/datascience/fortune_data_mining.ipynb",
    },
    {
      name: "E-Commerce Website",
      description:
        "A comprehensive cloth purchase platform that allows users to add cards to garments, and offers curated recommendations for popular clothes.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "sql",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/mervelil/ecommerce",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };