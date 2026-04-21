document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const about = document.querySelector(".about");
  const aboutTrigger = document.querySelector(".about-trigger");
  const aboutClose = document.querySelector(".about-close");
  const imageGroups = document.querySelectorAll(".images");

  function openAbout() {
    if (!about) return;
    about.classList.add("open");
    body.classList.add("about-open");
    if (aboutTrigger) {
      aboutTrigger.setAttribute("aria-expanded", "true");
    }
    about.setAttribute("aria-hidden", "false");
  }

  function closeAbout() {
    if (!about) return;
    about.classList.remove("open");
    body.classList.remove("about-open");
    if (aboutTrigger) {
      aboutTrigger.setAttribute("aria-expanded", "false");
    }
    about.setAttribute("aria-hidden", "true");
  }

  if (aboutTrigger) {
    aboutTrigger.addEventListener("click", openAbout);
    aboutTrigger.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openAbout();
      }
    });
  }

  if (aboutClose) {
    aboutClose.addEventListener("click", closeAbout);
    aboutClose.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        closeAbout();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAbout();
    }
  });

  imageGroups.forEach((group) => {
    const figures = group.querySelectorAll("figure");
    if (!figures.length) return;

    let currentIndex = 0;

    group.addEventListener("click", () => {
      figures[currentIndex].style.display = "none";
      currentIndex = (currentIndex + 1) % figures.length;
      figures[currentIndex].style.display = "";
    });
  });
});
