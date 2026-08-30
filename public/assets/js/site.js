(function () {
  "use strict";

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setBodyLock(locked, className) {
    document.body.classList.toggle(className, locked);
  }

  function initNavigation() {
    const menuButton = $("[data-menu-toggle]");
    const nav = $("[data-site-nav]");
    const dropdownButton = $("[data-dropdown-toggle]");
    const dropdownMenu = $("[data-dropdown-menu]");

    if (menuButton && nav) {
      menuButton.addEventListener("click", () => {
        const open = menuButton.getAttribute("aria-expanded") !== "true";
        menuButton.setAttribute("aria-expanded", String(open));
        nav.classList.toggle("is-open", open);
        setBodyLock(open, "menu-open");
      });

      nav.addEventListener("click", (event) => {
        if (event.target.closest("a") && window.innerWidth <= 960) {
          menuButton.setAttribute("aria-expanded", "false");
          nav.classList.remove("is-open");
          setBodyLock(false, "menu-open");
        }
      });
    }

    if (dropdownButton && dropdownMenu) {
      dropdownButton.addEventListener("click", (event) => {
        if (window.innerWidth > 960) return;
        event.preventDefault();
        const open = dropdownButton.getAttribute("aria-expanded") !== "true";
        dropdownButton.setAttribute("aria-expanded", String(open));
        dropdownMenu.classList.toggle("is-open", open);
      });
    }

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      if (menuButton && nav) {
        menuButton.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
        setBodyLock(false, "menu-open");
      }
      if (dropdownButton && dropdownMenu) {
        dropdownButton.setAttribute("aria-expanded", "false");
        dropdownMenu.classList.remove("is-open");
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 960 && menuButton && nav) {
        menuButton.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
        setBodyLock(false, "menu-open");
      }
    });
  }

  function initAccordions() {
    $$('[data-accordion-trigger]').forEach((trigger) => {
      const panelId = trigger.getAttribute("aria-controls");
      const panel = document.getElementById(panelId);
      if (!panel) return;

      trigger.addEventListener("click", () => {
        const open = trigger.getAttribute("aria-expanded") === "true";
        trigger.setAttribute("aria-expanded", String(!open));
        panel.hidden = open;
      });
    });
  }

  function initFiltering() {
    $$('[data-filter-system]').forEach((system) => {
      const buttons = $$('[data-filter]', system);
      const items = $$('[data-category]', system);
      const search = $('[data-filter-search]', system);
      const empty = $('[data-filter-empty]', system);
      let active = "all";

      const apply = () => {
        const term = search ? search.value.trim().toLowerCase() : "";
        let visible = 0;
        items.forEach((item) => {
          const category = item.dataset.category || "";
          const haystack = (item.dataset.search || item.textContent).toLowerCase();
          const categoryMatch = active === "all" || category.split(" ").includes(active);
          const textMatch = !term || haystack.includes(term);
          item.hidden = !(categoryMatch && textMatch);
          if (!item.hidden) visible += 1;
        });
        if (empty) empty.hidden = visible !== 0;
      };

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          active = button.dataset.filter || "all";
          buttons.forEach((item) => {
            const selected = item === button;
            item.classList.toggle("is-active", selected);
            item.setAttribute("aria-pressed", String(selected));
          });
          apply();
        });
      });

      if (search) search.addEventListener("input", apply);
      apply();
    });
  }

  function initFaqSearch() {
    const input = $('[data-faq-search]');
    if (!input) return;
    const items = $$('[data-faq-item]');
    const groups = $$('[data-faq-group]');
    const empty = $('[data-faq-empty]');

    const apply = () => {
      const term = input.value.trim().toLowerCase();
      let visibleCount = 0;
      items.forEach((item) => {
        const match = !term || item.textContent.toLowerCase().includes(term);
        item.hidden = !match;
        if (match) visibleCount += 1;
      });
      groups.forEach((group) => {
        const groupItems = $$('[data-faq-item]', group);
        group.hidden = groupItems.every((item) => item.hidden);
      });
      if (empty) empty.hidden = visibleCount !== 0;
    };

    input.addEventListener("input", apply);
  }

  function initScopeRecommender() {
    const form = $('[data-scope-form]');
    const result = $('[data-scope-result]');
    if (!form || !result) return;

    const packages = {
      small2: { name: "$29 package", price: "$29", copy: "Two concepts for one small, focused outdoor area." },
      small4: { name: "$49 package", price: "$49", copy: "Four concepts for one small, focused outdoor area." },
      medium: { name: "$89 package", price: "$89", copy: "Four concepts for one complete medium front yard, backyard, patio, or two directly connected areas." },
      large: { name: "$149 package", price: "$149", copy: "A large, complex, or multi-area property that needs one coordinated direction." }
    };

    const choose = () => {
      const area = form.elements.area.value;
      const concepts = form.elements.concepts.value;
      let key = "small2";
      if (area === "large") key = "large";
      else if (area === "medium") key = "medium";
      else if (concepts === "four") key = "small4";

      const item = packages[key];
      result.innerHTML = `
        <span class="eyebrow">Likely starting point</span>
        <div class="scope-result__price">${item.price}</div>
        <h3>${item.name}</h3>
        <p>${item.copy}</p>
        <p class="small muted">This is guidance only. Send photos before purchase so the real scope can be confirmed.</p>
      `;
    };

    form.addEventListener("change", choose);
    choose();
  }

  function serializeForm(form) {
    const data = new FormData(form);
    const lines = [];
    for (const [key, value] of data.entries()) {
      if (value instanceof File) {
        if (value.name) lines.push(`${key}: ${value.name}`);
      } else if (String(value).trim()) {
        lines.push(`${key}: ${String(value).trim()}`);
      }
    }
    return lines.join("\n");
  }

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    const area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.append(area);
    area.select();
    const copied = document.execCommand("copy");
    area.remove();
    return copied;
  }

  function initForms() {
    $$('[data-email-form]').forEach((form) => {
      const status = $('[data-form-status]', form);
      const mode = form.dataset.emailForm || "contact";
      const subject = mode === "design" ? "Custom design request" : "Website inquiry";

      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (!form.reportValidity()) return;
        const summary = serializeForm(form);
        let copied = false;
        try {
          copied = await copyText(summary);
        } catch (_error) {
          copied = false;
        }

        if (status) {
          status.hidden = false;
          status.textContent = copied
            ? "Your request summary was copied. Your email app is opening so you can send it with any project photos or video."
            : "Your email app is opening. Attach your project photos or video before sending.";
        }

        const mailto = `mailto:orlanogardens@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary)}`;
        window.setTimeout(() => {
          window.location.href = mailto;
        }, 250);
      });
    });

    const upload = $('[data-image-upload]');
    const preview = $('[data-upload-preview]');
    if (upload && preview) {
      upload.addEventListener("change", () => {
        preview.innerHTML = "";
        const files = Array.from(upload.files || []).slice(0, 6);
        files.forEach((file) => {
          if (!file.type.startsWith("image/")) return;
          const image = document.createElement("img");
          image.alt = `Selected file preview: ${file.name}`;
          image.src = URL.createObjectURL(file);
          image.addEventListener("load", () => URL.revokeObjectURL(image.src), { once: true });
          preview.append(image);
        });
      });
    }
  }

  function initCookieControls() {
    const STORAGE_KEY = "orlano-gardens-cookie-choice";
    const banner = $('[data-cookie-banner]');
    const dialog = $('[data-cookie-dialog]');
    const analytics = dialog ? $('[name="analytics"]', dialog) : null;
    const advertising = dialog ? $('[name="advertising"]', dialog) : null;

    const readChoice = () => {
      try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      } catch (_error) {
        return null;
      }
    };

    const saveChoice = (choice) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...choice, updatedAt: new Date().toISOString() }));
      if (banner) banner.hidden = true;
      document.documentElement.dataset.analyticsConsent = String(Boolean(choice.analytics));
      document.documentElement.dataset.advertisingConsent = String(Boolean(choice.advertising));
    };

    const existing = readChoice();
    if (existing) {
      saveChoice(existing);
    } else if (banner) {
      banner.hidden = false;
    }

    $$('[data-cookie-accept]').forEach((button) => {
      button.addEventListener("click", () => saveChoice({ analytics: true, advertising: true }));
    });

    $$('[data-cookie-reject]').forEach((button) => {
      button.addEventListener("click", () => saveChoice({ analytics: false, advertising: false }));
    });

    $$('[data-cookie-open]').forEach((button) => {
      button.addEventListener("click", () => {
        if (!dialog) return;
        const choice = readChoice();
        if (analytics) analytics.checked = Boolean(choice && choice.analytics);
        if (advertising) advertising.checked = Boolean(choice && choice.advertising);
        if (typeof dialog.showModal === "function") {
          dialog.showModal();
          setBodyLock(true, "dialog-open");
        }
      });
    });

    $$('[data-cookie-close]').forEach((button) => {
      button.addEventListener("click", () => {
        if (dialog) dialog.close();
      });
    });

    if (dialog) {
      dialog.addEventListener("close", () => setBodyLock(false, "dialog-open"));
      dialog.addEventListener("click", (event) => {
        const rect = dialog.getBoundingClientRect();
        const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
        if (outside) dialog.close();
      });
    }

    $$('[data-cookie-save]').forEach((button) => {
      button.addEventListener("click", () => {
        saveChoice({
          analytics: analytics ? analytics.checked : false,
          advertising: advertising ? advertising.checked : false
        });
        if (dialog) dialog.close();
      });
    });
  }

  function initArticleTools() {
    const article = $('[data-article]');
    const progress = $('[data-article-progress]');
    if (!article) return;

    const headings = $$('h2[id], h3[id]', article);
    const tocLinks = $$('[data-article-toc] a');

    const updateProgress = () => {
      if (!progress) return;
      const rect = article.getBoundingClientRect();
      const total = article.offsetHeight - window.innerHeight;
      const traveled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      progress.style.width = `${Math.min(100, (traveled / Math.max(total, 1)) * 100)}%`;
    };

    const updateToc = () => {
      let current = headings[0] ? headings[0].id : "";
      headings.forEach((heading) => {
        if (heading.getBoundingClientRect().top <= 160) current = heading.id;
      });
      tocLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${current}`));
    };

    let ticking = false;
    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateProgress();
        updateToc();
        ticking = false;
      });
    }, { passive: true });

    updateProgress();
    updateToc();

    $$('[data-copy-link]').forEach((button) => {
      button.addEventListener("click", async () => {
        try {
          await copyText(window.location.href);
          const original = button.textContent;
          button.textContent = "Link copied";
          window.setTimeout(() => { button.textContent = original; }, 1800);
        } catch (_error) {
          button.textContent = "Copy failed";
        }
      });
    });
  }

  function initReveal() {
    const elements = $$('[className="reveal" data-reveal=""]');
    if (!elements.length) return;
    elements.forEach((element) => element.classList.add("reveal"));

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px" });

    elements.forEach((element) => observer.observe(element));
  }

  function initMisc() {
    $$('[data-current-year]').forEach((node) => { node.textContent = String(new Date().getFullYear()); });

    $$('[data-print]').forEach((button) => button.addEventListener("click", () => window.print()));

    const backButton = $('[data-go-back]');
    if (backButton) {
      backButton.addEventListener("click", () => {
        if (window.history.length > 1) window.history.back();
      });
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initAccordions();
    initFiltering();
    initFaqSearch();
    initScopeRecommender();
    initForms();
    initCookieControls();
    initArticleTools();
    initReveal();
    initMisc();
  });
})();
