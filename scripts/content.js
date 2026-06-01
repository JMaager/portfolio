const PORTFOLIO_CONTENT = {
  meta: {
    name: "Jesper Maagerø",
    role: "Frontend Development Student",
    intro:
      "I build user-friendly interfaces with clean code, clear structure, and a focus on useful experiences.",
    image: {
      src: "./images/jesper golf.jpg",
      alt: "Jesper playing golf",
    },
  },
  about: [
    {
      title: "Location",
      items: ["Tonsberg, Norway"],
    },
    {
      title: "Interests",
      items: ["Golf", "Gaming", "TCG"],
    },
    {
      title: "Education",
      items: [
        "Frontend Development at Noroff (2024 - 2026)",
        "ICT Apprentice (2016 - 2018)",
      ],
    },
    {
      title: "Skills",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Vite",
        "Bootstrap",
        "API Integration",
        "Authentication (JWT)",
      ],
    },
  ],
  projects: [
    {
      slug: "golden-pavilion",
      title: "Golden Pavilion",
      description:
        "A modern auction house application built with Vite, Vanilla JavaScript, and Bootstrap 5. It connects to the Noroff v2 Auction API for authentication, listings, bidding, and profile management.",
      image: "./images/gp.png",
      imageCaption:
        "Golden Pavilion auction interface with listing cards, bidding actions, and profile-driven account features.",
      stack: ["HTML", "CSS", "JavaScript", "Vite", "Bootstrap"],
      liveHref: "https://goldenpavilion.netlify.app/",
      sourceHref: "https://github.com/JMaager/semester-project-2",
      readmeHref:
        "https://github.com/JMaager/semester-project-2/blob/main/README.md",
      articleTitle: "Golden Pavilion Project Article",
      articleContent:
        "Golden Pavilion is a modern auction house web app focused on a smooth, practical marketplace experience. It uses Vite and vanilla JavaScript ES modules for fast development and clean project structure, while Bootstrap 5.3.2 and custom CSS handle responsive UI and visual polish. The app integrates with the Noroff v2 Auction API for authentication, listing management, bidding, and profile updates. Core functionality includes JWT authentication restricted to @stud.noroff.no addresses, user profiles with editable avatar/banner/bio, and a credits system shown across logged-in views. Users can create, edit, and delete listings with media galleries, place bids on active listings with real-time validation, and review bid history. It also includes quick bidding from listing cards, search and tag filtering, pagination with mobile-friendly behavior, and profile tabs for Listings, Bids, and Wins. Browsing and search are available even to unregistered visitors.",
    },
    {
      slug: "blue-tides",
      title: "BlueTides",
      description:
        "A lightweight single-page social app built with plain HTML, CSS, and JavaScript. It talks to the Noroff v2 Social API for authentication, posts, profiles, reactions, and comments.",
      image: "./images/bluetides.png",
      imageCaption:
        "BlueTides social feed view with lightweight routing, profile access, and post interaction controls.",
      stack: ["HTML", "CSS", "JavaScript"],
      liveHref: "https://bluetides.netlify.app/#/feed?tab=general",
      sourceHref: "https://github.com/JMaager/BlueTides",
      readmeHref: "https://github.com/JMaager/BlueTides/blob/main/README.md",
      articleTitle: "BlueTides Project Article",
      articleContent:
        "BlueTides is a lightweight single-page social application built without a frontend framework, using plain HTML, CSS, and modular JavaScript. It integrates with the Noroff v2 Social API for authentication and social interactions including posts, profiles, reactions, and comments. The application architecture uses ES modules, browser Fetch API calls, a minimal hash router (for routes like #/feed, #/post/:id, and #/profile/:name), and reusable DOM helper utilities. Key features include email/password authentication with locally stored JWT, automatic creation and use of X-Noroff-API-Key, a paginated posts feed with search and a following filter, single post views with comments and reactions, and complete CRUD actions for your own posts. Profile pages support avatar and bio updates, follow/unfollow interactions, and follower/following popups for a compact but full social experience.",
    },
    {
      slug: "green-cart",
      title: "GreenCart",
      description:
        "Online shop built with Next.js App Router, React, TypeScript in strict mode, and Bootstrap.",
      image: "./images/greencart.png",
      imageCaption:
        "GreenCart storefront and product browsing experience powered by Next.js, TypeScript, and Bootstrap.",
      stack: ["Next.js", "React", "TypeScript", "Bootstrap"],
      liveHref: "https://greencart-jm.netlify.app/",
      sourceHref: "https://github.com/NoroffFEU/jsfw-2025-v1-jmaager-jsf",
      readmeHref:
        "https://github.com/NoroffFEU/jsfw-2025-v1-jmaager-jsf/blob/main/README.md",
      articleTitle: "GreenCart Project Article",
      articleContent:
        "GreenCart is an online shop project built with Next.js 16 (App Router), React 19, TypeScript in strict mode, and Bootstrap 5. The app fetches products from the Noroff Online Shop API and includes both product list and product detail flows. Users can search and sort products on the homepage, manage cart contents with quantity updates and item removal, and see live total calculation. Checkout includes a success flow that clears the cart state. The project also includes a contact form with TypeScript validation rules for full name, subject, email format, and minimum message length. The UI is designed to remain responsive and usable across desktop, tablet, and mobile breakpoints.",
    },
    {
      slug: "rainydays",
      title: "RainyDays",
      description:
        "My first introduction to JavaScript, building a fictional web store with API-driven inventory and cart logic.",
      image: "./images/rainydays.png",
      imageCaption:
        "RainyDays storefront preview showing the product listing and clean shopping flow.",
      stack: ["HTML", "CSS", "JavaScript"],
      liveHref: "https://jmaager.github.io/RainyDays_JS_CA/",
      sourceHref: "https://github.com/JMaager/RainyDays_JS_CA",
      readmeHref:
        "https://github.com/JMaager/RainyDays_JS_CA/blob/main/README.md",
      articleTitle: "RainyDays Project Article",
      articleContent:
        "RainyDays was my first full project that combined static UI work with dynamic data. I focused on creating a storefront that feels simple to use while still handling practical features like product retrieval and cart behavior. Working with external APIs helped me understand asynchronous flows, loading states, and how to keep user interactions predictable when data arrives at different times. This project also improved my structure in JavaScript by separating API logic from display logic, making the code easier to maintain and expand.",
    },
    {
      slug: "community-science-museum",
      title: "Community Science Museum",
      description:
        "A semester project focused on visual design fundamentals and strong semantic HTML/CSS structure.",
      image: "./images/CSM.png",
      imageCaption:
        "Community Science Museum hero section with visual hierarchy built in semantic HTML and CSS.",
      stack: ["HTML", "CSS"],
      liveHref: "https://jmaager.github.io/CA_Semester_Project_1_Museum/",
      sourceHref: "https://github.com/JMaager/CA_Semester_Project_1_Museum",
      readmeHref:
        "https://github.com/JMaager/CA_Semester_Project_1_Museum/blob/main/README.md",
      articleTitle: "Community Science Museum Project Article",
      articleContent:
        "Community Science Museum was a milestone where I focused on design execution and clean page structure. The goal was to apply accessibility-minded HTML and reusable CSS patterns while maintaining a visual identity suitable for a museum experience. I worked on consistent spacing systems, readable typography, and component-level styling to keep the pages coherent. This project strengthened my confidence in building responsive layouts without relying on heavy frameworks.",
    },
    {
      slug: "gentle-giant",
      title: "Gentle Giant",
      description:
        "A blog platform project combining design, frontend fundamentals, authentication, and API-driven post management.",
      image: "./images/gg.png",
      imageCaption:
        "Gentle Giant blog interface where users can create and manage posts through API calls.",
      stack: ["HTML", "CSS", "JavaScript"],
      liveHref: "https://gentlegiant.netlify.app/",
      sourceHref: "https://github.com/NoroffFEU/FED1-PE1-JMaager",
      readmeHref:
        "https://github.com/NoroffFEU/FED1-PE1-JMaager/blob/main/README.md",
      articleTitle: "Gentle Giant Project Article",
      articleContent:
        "Gentle Giant is the project where everything came together after one year of frontend studies. It includes authentication, content creation, and content management through API integration. I designed and implemented user flows for logging in, creating posts, editing posts, and displaying them with a clear reading experience. The project taught me to think more like a product developer: balancing technical implementation, UX clarity, and maintainability while handling real-world states like empty views, failed requests, and user feedback.",
    },
  ],
  contact: [
    {
      label: "Email",
      href: "mailto:jesper.maagero@hotmail.com",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jesper-maager%C3%B8-34a587237/",
    },
    {
      label: "GitHub",
      href: "https://github.com/JMaager",
    },
  ],
};

window.PORTFOLIO_CONTENT = PORTFOLIO_CONTENT;
