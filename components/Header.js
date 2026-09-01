"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const services = [
  ["00", "All Services", "Choose the right project scope", "/services"],
  [
    "01",
    "Front Yard Design",
    "Entrances, beds and curb appeal",
    "/services/front-yard-design",
  ],
  [
    "02",
    "Backyard Design",
    "Zones, privacy and outdoor use",
    "/services/backyard-design",
  ],
  [
    "03",
    "Garden Bed + Entry",
    "Focused, high-impact areas",
    "/services/garden-bed-entry",
  ],
  [
    "04",
    "Patio + Outdoor Living",
    "Gathering, circulation and planting",
    "/services/patio-outdoor-living",
  ],
  [
    "05",
    "Multi-Area Property",
    "One direction across connected spaces",
    "/services/multi-area-property",
  ],
];

const primaryNav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Pricing", "/pricing"],
  ["Contact Us", "/contact"],
  ["Garden Guidelines", "/garden-guides"],
];

export default function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const loadingTimer = useRef(null);

  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
  const servicesActive = pathname.startsWith("/services");

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    // Keep the transition indicator visible briefly after the new route mounts,
    // so fast client-side navigations still give clear loading feedback.
    if (loadingTimer.current) window.clearTimeout(loadingTimer.current);
    loadingTimer.current = window.setTimeout(() => setIsNavigating(false), 450);
    return () => {
      if (loadingTimer.current) window.clearTimeout(loadingTimer.current);
    };
  }, [pathname]);

  useEffect(() => {
    // Give a hard refresh the same branded loading treatment.
    setIsNavigating(true);
    loadingTimer.current = window.setTimeout(() => setIsNavigating(false), 650);
    return () => {
      if (loadingTimer.current) window.clearTimeout(loadingTimer.current);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleNavigate = (event) => {
    if (event.defaultPrevented) return;
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    if (loadingTimer.current) window.clearTimeout(loadingTimer.current);
    setIsNavigating(true);
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="site-header" data-site-header="">
      <div className="container site-header__inner">
        <Link className="brand" href="/" aria-label="Orlano Gardens home">
          <img
            src="/assets/images/orlano-logo.jpg"
            alt="Orlano Gardens logo"
            className="brand__logo"
          />
          <span className="brand__copy">
            <span className="brand__name">ORLANO GARDENS</span>
            <span className="brand__tag">Remote Outdoor Design</span>
          </span>
        </Link>

        <button
          className={`menu-toggle${open ? " is-open" : ""}`}
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-toggle__lines" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
          </span>
        </button>

        <div
          className={`nav-backdrop${open ? " is-open" : ""}`}
          aria-hidden="true"
          onClick={() => {
            setOpen(false);
            setServicesOpen(false);
          }}
        />

        <nav
          className={`site-nav${open ? " is-open" : ""}`}
          id="site-navigation"
          aria-label="Primary navigation"
        >
          <ul className="site-nav__list">
            <li>
              <Link
                className="site-nav__link"
                href="/"
                onClick={handleNavigate}
                aria-current={isActive("/") ? "page" : undefined}
              >
                Home
              </Link>
            </li>

            <li className={`nav-dropdown${servicesActive ? " is-active" : ""}`}>
              <button
                className="nav-dropdown__trigger"
                type="button"
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
                onClick={() => setServicesOpen((value) => !value)}
              >
                Services
                <svg
                  aria-hidden="true"
                  viewBox="0 0 12 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="m1 1.5 5 5 5-5"></path>
                </svg>
              </button>
              <div
                className={`nav-dropdown__menu${servicesOpen ? " is-open" : ""}`}
                id="services-menu"
              >
                {services.map(([number, title, copy, href]) => (
                  <Link
                    href={href}
                    key={href}
                    onClick={(event) => {
                      handleNavigate(event);
                    }}
                  >
                    <span className="nav-number">{number}</span>
                    <span className="nav-copy">
                      <strong>{title}</strong>
                      <small>{copy}</small>
                    </span>
                  </Link>
                ))}
              </div>
            </li>

            <li>
              <Link
                className="site-nav__link"
                href="/garden-guides"
                onClick={handleNavigate}
                aria-current={isActive("/garden-guides") ? "page" : undefined}
              >
                Garden Guides
              </Link>
            </li>

            <li>
              <Link
                className="site-nav__link"
                href="/projects"
                onClick={handleNavigate}
                aria-current={isActive("/projects") ? "page" : undefined}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="site-nav__link"
                href="/#testimonials"
                onClick={handleNavigate}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                className="site-nav__link"
                href="/pricing"
                onClick={handleNavigate}
                aria-current={isActive("/pricing") ? "page" : undefined}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className="site-nav__link"
                href="/contact"
                onClick={handleNavigate}
                aria-current={isActive("/contact") ? "page" : undefined}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                className="site-nav__link"
                href="/about"
                onClick={handleNavigate}
                aria-current={isActive("/about") ? "page" : undefined}
              >
                About
              </Link>
            </li>
          </ul>
          <Link
            className="btn btn--primary btn--sm site-nav__cta"
            href="/get-custom-design"
            onClick={handleNavigate}
          >
            Get Your Custom Design
          </Link>
        </nav>

        {isNavigating && (
          <div className="navigation-loading" role="status" aria-live="polite">
            <div className="navigation-loading__bar" />
            <span className="navigation-loading__text">
              Loading your garden view…
            </span>
          </div>
        )}
      </div>
    </header>
  );
}
