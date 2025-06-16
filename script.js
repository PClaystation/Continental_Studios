document.addEventListener("DOMContentLoaded", () => {
  const websiteList = document.querySelector('.website-list');
  const flipWrapper = document.querySelector(".flip-wrapper");
  const heroSection = document.querySelector(".hero");
  const button = document.getElementById("ChangeModeButton");
  const backToTop = document.getElementById("backToTop");

  // Enable dark mode by default
  document.body.classList.add('dark-mode');

  // Intersection Observer for revealing items on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Optional: unobserve after revealed for performance
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  const websiteSets = [
    [
      {
        img: 'images/App-logo-2-W.png',
        title: 'StepCast',
        desc: 'StepCast is a walk tracking website tailored towards podcast listeners.',
        link: 'https://pclaystation.github.io/StepCast/',
      },
      {
        img: 'images/TEA-Logo-S-W.png',
        title: 'The Echo Archives',
        desc: 'The Echo Archives is an archive of different audio dramas I have listened to.',
        link: 'https://pclaystation.github.io/StepCast/',
      }
    ],
    [
      {
        img: 'images/minesweeper-nbg-w.png',
        title: 'MineSweeper',
        desc: 'MineSweeper is a improved clone of the classic minesweeper.',
        link: 'https://pclaystation.github.io/Minesweeper/',
      },
      {
        img: 'images/question-mark.png',
        title: 'Coming soon',
        desc: 'Coming soon.',
        link: '',
      }
    ]
  ];

  let mode = 0;
  let toggled = false;

  function renderWebsites(set) {
    websiteList.innerHTML = '';
    set.forEach(site => {
      const item = document.createElement('div');
      item.classList.add('website-item');
      item.innerHTML = `
        <img src="${site.img}" alt="${site.title}" class="website-logo">
        <h3>${site.title}</h3>
        <p>${site.desc}</p>
        <a href="${site.link}" class="btn" target="_blank" rel="noopener noreferrer">Visit Website</a>
      `;
      websiteList.appendChild(item);

      // Observe each new item for scroll reveal
      observer.observe(item);
    });
  }

  // Initial render
  renderWebsites(websiteSets[mode]);

  // Back to Top button logic
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 200 ? "block" : "none";
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Toggle button click handler
  button.addEventListener("click", () => {
    flipWrapper.classList.toggle("flipped");
    heroSection.classList.add("fade");

    setTimeout(() => {
      if (toggled) {
        heroSection.style.backgroundImage = "url('images/placeHolder2.jpg')";
      } else {
        heroSection.style.backgroundImage = "url('images/placeHolder3.jpg')";
      }
      heroSection.classList.remove("fade");
      toggled = !toggled;
    }, 100); // Make sure this matches your CSS fade duration

    // Switch website set and re-render
    mode = (mode + 1) % websiteSets.length;
    renderWebsites(websiteSets[mode]);
  });
});
