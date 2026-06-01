const portfolioContent = window.PORTFOLIO_CONTENT;

function renderAboutCards(items) {
  return items
    .map(
      (group) => `
                <article class="about-card" data-reveal>
                    <h3>${group.title}</h3>
                    <ul>
                        ${group.items.map((item) => `<li>${item}</li>`).join("")}
                    </ul>
                </article>
            `,
    )
    .join("");
}

function renderProjectCards(projects) {
  return projects
    .map(
      (project) => `
                <article class="project-card" data-reveal>
                    <img class="project-image" src="${project.image}" alt="Screenshot from ${project.title}">
                    <div class="project-content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="stack-row">
                            ${project.stack.map((tech) => `<span class="chip">${tech}</span>`).join("")}
                        </div>
                        <div class="project-links">
                            <a href="./project-article.html?project=${encodeURIComponent(project.slug)}">Read Article</a>
                            <a href="${project.liveHref}" target="_blank" rel="noreferrer noopener">Live Demo</a>
                            <a href="${project.sourceHref}" target="_blank" rel="noreferrer noopener">View Source</a>
                        </div>
                    </div>
                </article>
            `,
    )
    .join("");
}

function renderContactLinks(contacts) {
  return contacts
    .map(
      (entry) => `
                <a class="contact-link" href="${entry.href}" target="_blank" rel="noreferrer noopener">
                    ${entry.label}
                </a>
            `,
    )
    .join("");
}

function renderPortfolio(content) {
  const app = document.getElementById("app");

  if (!app) {
    return;
  }

  app.innerHTML = `
        <header class="site-header" data-reveal>
            <nav class="site-nav">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>

        <main class="layout" id="top">
            <section class="hero" data-reveal>
                <h1>${content.meta.name}</h1>
                <h2>${content.meta.role}</h2>
                <p class="intro">${content.meta.intro}</p>
                <div class="hero-actions">
                    <a href="#projects" class="action action-primary">Explore Projects</a>
                    <a href="#contact" class="action action-secondary">Get In Touch</a>
                </div>
            </section>

            <section class="panel" id="about">
                <div class="section-heading" data-reveal>
                    <h2>About Me</h2>
                </div>
                <div class="about-layout">
                    <div class="about-grid">
                        ${renderAboutCards(content.about)}
                    </div>
                    <figure class="portrait-wrap" data-reveal>
                        <img src="${content.meta.image.src}" alt="${content.meta.image.alt}">
                    </figure>
                </div>
            </section>

            <section class="panel" id="projects">
                <div class="section-heading" data-reveal>
                    <h2>Projects</h2>
                </div>
                <div class="project-grid">
                    ${renderProjectCards(content.projects)}
                </div>
            </section>

            <section class="panel" id="contact">
                <div class="section-heading" data-reveal>
                    <h2>Contact</h2>
                </div>
                <div class="contact-row" data-reveal>
                    ${renderContactLinks(content.contact)}
                </div>
            </section>
        </main>

        <footer class="site-footer" data-reveal>
            <p>Made by ${content.meta.name} &copy; ${new Date().getFullYear()}</p>
        </footer>
    `;
}

function setupRevealAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  document.querySelectorAll("[data-reveal]").forEach((element) => {
    observer.observe(element);
  });
}

if (portfolioContent) {
  renderPortfolio(portfolioContent);
  setupRevealAnimation();
}
