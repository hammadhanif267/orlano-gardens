"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SiteEnhancements() {
  const pathname = usePathname();
  useEffect(() => {
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const controller = new AbortController();
  const listen = (target, type, handler, options = {}) => target.addEventListener(type, handler, { ...options, signal: controller.signal });

  function setBodyLock(locked, className) {
    document.body.classList.toggle(className, locked);
  }

  function initAccordions() {
    $$('[data-accordion-trigger]').forEach((trigger) => {
      const panelId = trigger.getAttribute("aria-controls");
      const panel = document.getElementById(panelId);
      if (!panel) return;

      listen(trigger, "click", () => {
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
          const categoryMatch = active === "all" || category.split(/\s+/).includes(active);
          const textMatch = !term || haystack.includes(term);
          item.hidden = !(categoryMatch && textMatch);
          if (!item.hidden) visible += 1;
        });
        if (empty) empty.hidden = visible !== 0;
      };

      buttons.forEach((button) => {
        listen(button, "click", () => {
          active = button.dataset.filter || "all";
          buttons.forEach((item) => {
            const selected = item === button;
            item.classList.toggle("is-active", selected);
            item.setAttribute("aria-pressed", String(selected));
          });
          apply();
        });
      });

      if (search) listen(search, "input", apply);
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

    listen(input, "input", apply);
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

    listen(form, "change", choose);
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

      listen(form, "submit", async (event) => {
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
      listen(upload, "change", () => {
        preview.innerHTML = "";
        const files = Array.from(upload.files || []).slice(0, 6);
        files.forEach((file) => {
          if (!file.type.startsWith("image/")) return;
          const image = document.createElement("img");
          image.alt = `Selected file preview: ${file.name}`;
          image.src = URL.createObjectURL(file);
          listen(image, "load", () => URL.revokeObjectURL(image.src), { once: true });
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
      listen(button, "click", () => saveChoice({ analytics: true, advertising: true }));
    });

    $$('[data-cookie-reject]').forEach((button) => {
      listen(button, "click", () => saveChoice({ analytics: false, advertising: false }));
    });

    $$('[data-cookie-open]').forEach((button) => {
      listen(button, "click", () => {
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
      listen(button, "click", () => {
        if (dialog) dialog.close();
      });
    });

    if (dialog) {
      listen(dialog, "close", () => setBodyLock(false, "dialog-open"));
      listen(dialog, "click", (event) => {
        const rect = dialog.getBoundingClientRect();
        const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
        if (outside) dialog.close();
      });
    }

    $$('[data-cookie-save]').forEach((button) => {
      listen(button, "click", () => {
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
    listen(window, "scroll", () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateProgress();
        updateToc();
        ticking = false;
      });
    }, { passive: true });

    $$('[data-copy-link]').forEach((button) => {
      listen(button, "click", async () => {
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

  function initImageLightbox() {
    // Only standalone images are enhanced. Images already wrapped in links/buttons
    // keep their original navigation behavior.
    const images = $$('img:not(a img):not(button img):not([data-no-lightbox])');
    if (!images.length) return;

    let overlay = document.getElementById("image-lightbox");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "image-lightbox";
      overlay.className = "image-lightbox";
      overlay.hidden = true;
      overlay.setAttribute("role", "dialog");
      overlay.setAttribute("aria-modal", "true");
      overlay.setAttribute("aria-label", "Image preview");
      overlay.innerHTML = `
        <div class="image-lightbox__backdrop" data-lightbox-close></div>
        <div class="image-lightbox__panel" role="document">
          <button class="image-lightbox__close" type="button" aria-label="Close image preview" data-lightbox-close>×</button>
          <div class="image-lightbox__media">
            <img class="image-lightbox__image" alt="" />
          </div>
          <div class="image-lightbox__copy">
            <span class="eyebrow image-lightbox__eyebrow">Digital design image</span>
            <h2 class="image-lightbox__title"></h2>
            <p class="image-lightbox__description"></p>
            <div class="image-lightbox__labels" aria-label="Image context">
              <span>Original space</span>
              <span>Digital Design Concept</span>
            </div>
          </div>
        </div>
      `;
      document.body.append(overlay);
    }

    const lightboxImage = $(".image-lightbox__image", overlay);
    const title = $(".image-lightbox__title", overlay);
    const description = $(".image-lightbox__description", overlay);
    const labels = $(".image-lightbox__labels", overlay);
    const closeButtons = $$("[data-lightbox-close]", overlay);
    let lastFocused = null;

    const isBeforeAfter = (image) => {
      const value = `${image.alt || ""} ${image.src || ""}`.toLowerCase();
      return /before|after|comparison|concept/.test(value);
    };

    const open = (image) => {
      if (!lightboxImage) return;
      lastFocused = document.activeElement;
      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = image.alt || "Orlano Gardens design image";

      const alt = image.alt || "Orlano Gardens design image";
      title.textContent = alt;
      description.textContent =
        "Tap outside the image or use the close button to return to the page. This visual is presented as a digital design concept, not a completed installation.";

      const beforeAfter = isBeforeAfter(image);
      labels.hidden = !beforeAfter;

      overlay.hidden = false;
      document.body.classList.add("image-lightbox-open");
      requestAnimationFrame(() => overlay.classList.add("is-open"));
      const close = $(".image-lightbox__close", overlay);
      if (close) close.focus();
    };

    const close = () => {
      if (overlay.hidden) return;
      overlay.classList.remove("is-open");
      window.setTimeout(() => {
        overlay.hidden = true;
        document.body.classList.remove("image-lightbox-open");
        lightboxImage.removeAttribute("src");
        if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
      }, 180);
    };

    listen(document, "click", (event) => {
      const image = event.target.closest?.(
        "img:not(a img):not(button img):not([data-no-lightbox])",
      );
      if (image && !image.closest("#image-lightbox")) open(image);
    });

    closeButtons.forEach((button) => listen(button, "click", close));
    listen(document, "keydown", (event) => {
      if (event.key === "Escape" && !overlay.hidden) close();
    });
  }

  function initMisc() {
    $$('[data-print]').forEach((button) => listen(button, "click", () => window.print()));

    const backButton = $('[data-go-back]');
    if (backButton) {
      listen(backButton, "click", () => {
        if (window.history.length > 1) window.history.back();
      });
    }
  }

    initAccordions();
    initFiltering();
    initFaqSearch();
    initScopeRecommender();
    initForms();
    initCookieControls();
    initArticleTools();
    initImageLightbox();
    initMisc();

    return () => {
      controller.abort();
    };
  }, [pathname]);

  return null;
}
