"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const serviceLinks = [
  ["01", "Services Overview", "Compare both ways to start", "/services"],
  [
    "02",
    "Custom Design Service",
    "Made for your exact property",
    "/custom-design-service",
  ],
  ["03", "Ready-to-Use Designs", "Ready made garden plans", "/ready-to-use-designs"],
  ["04", "Pricing", "Compare custom packages", "/pricing"],
];

const navLinks = [
  ["Portfolio", "/portfolio"],
  ["How It Works", "/how-it-works"],
  ["Garden Guides", "/garden-guides"],
  ["About", "/about"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
];

export default function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
  const servicesActive = [
    "/services",
    "/custom-design-service",
    "/ready-to-use-designs",
    "/pricing",
  ].some(isActive);

  const closeNavigation = () => {
    setOpen(false);
    setServicesOpen(false);
  };
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link
          className="brand"
          href="/"
          aria-label="Orlano Gardens home"
          onClick={closeNavigation}
        >
          <Image
            src="/assets/images/orlano-gardens-logo.png"
            alt=""
            className="brand__logo"
            width={52}
            height={52}
            priority
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
          onClick={() => setOpen(!open)}
        >
          <span className="menu-toggle__lines" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>
        <button
          className={`nav-backdrop${open ? " is-open" : ""}`}
          type="button"
          aria-label="Close navigation"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
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
                aria-current={isActive("/") ? "page" : undefined}
                onClick={closeNavigation}
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
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <svg
                  className="nav-chevron"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M3.5 6.25 8 10.5l4.5-4.25" />
                </svg>
              </button>
              <div
                className={`nav-dropdown__menu${servicesOpen ? " is-open" : ""}`}
                id="services-menu"
              >
                {serviceLinks.map(([number, title, copy, href]) => (
                  <Link href={href} key={href} onClick={closeNavigation}>
                    <span className="nav-number">{number}</span>
                    <span className="nav-copy">
                      <strong>{title}</strong>
                      <small>{copy}</small>
                    </span>
                  </Link>
                ))}
              </div>
            </li>
            {navLinks.map(([label, href]) => (
              <li key={href}>
                <Link
                  className="site-nav__link"
                  href={href}
                  aria-current={isActive(href) ? "page" : undefined}
                  onClick={closeNavigation}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            className="btn btn--primary btn--sm site-nav__cta"
            href="/custom-design-service"
            onClick={closeNavigation}
          >
            Get Your Custom Design
          </Link>
        </nav>
      </div>
    </header>
  );
}
