function getProjectFromQuery(projects) {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("project");

  if (!slug) {
    return null;
  }

  return projects.find((project) => project.slug === slug) || null;
}

function showCopyStatus(element, text) {
  const originalText = element.textContent;
  element.textContent = text;
  window.setTimeout(() => {
    element.textContent = originalText;
  }, 1500);
}

async function copyPageLink(trigger) {
  try {
    await navigator.clipboard.writeText(window.location.href);
    showCopyStatus(trigger, "Copied");
  } catch (error) {
    showCopyStatus(trigger, "Copy failed");
  }
}

function renderNotFound() {
  const app = document.getElementById("article-app");

  if (!app) {
    return;
  }

  app.innerHTML = `
    <main class="article-shell">
      <section class="panel article-content-block" data-reveal>
        <h1>Project Not Found</h1>
        <p class="intro">This project article does not exist. Return to the homepage and open a project from there.</p>
        <a class="action action-secondary" href="./index.html#projects">Back to Projects</a>
      </section>
    </main>
  `;
}

function renderProjectArticle(project) {
  const app = document.getElementById("article-app");

  if (!app) {
    return;
  }

  app.innerHTML = `
    <header class="site-header" data-reveal>
      <nav class="site-nav">
        <a href="./index.html">Home</a>
        <a href="./index.html#projects">Projects</a>
        <a href="./index.html#contact">Contact</a>
      </nav>
    </header>

    <main class="article-shell" id="top">
      <article class="panel article-content-block" data-reveal>
        <div class="article-title-row">
          <h1>${project.articleTitle}</h1>
          <button class="copy-link-button" id="copy-link" type="button">Copy Link</button>
        </div>

        <figure class="article-figure">
          <img src="${project.image}" alt="${project.title} article image">
          <figcaption>${project.imageCaption}</figcaption>
        </figure>

        <div class="project-links article-links">
          <a href="${project.liveHref}" target="_blank" rel="noreferrer noopener">Visit Live Site</a>
          <a href="${project.sourceHref}" target="_blank" rel="noreferrer noopener">Open Repository</a>
          <a href="${project.readmeHref}" target="_blank" rel="noreferrer noopener">Open README.md</a>
        </div>

        <section class="article-main-content">
          <h2>Main Content</h2>
          <p>${project.articleContent}</p>
        </section>
      </article>
    </main>
  `;

  const copyButton = document.getElementById("copy-link");
  if (copyButton) {
    copyButton.addEventListener("click", () => {
      copyPageLink(copyButton);
    });
  }
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

const content = window.PORTFOLIO_CONTENT;

if (!content || !Array.isArray(content.projects)) {
  renderNotFound();
} else {
  const project = getProjectFromQuery(content.projects);

  if (!project) {
    renderNotFound();
  } else {
    renderProjectArticle(project);
  }
}

setupRevealAnimation();
