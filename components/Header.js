"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const services = [
  ["00", "All Services", "Choose the right project scope", "/services"],
  ["01", "Front Yard Design", "Entrances, beds and curb appeal", "/services/front-yard-design"],
  ["02", "Backyard Design", "Zones, privacy and outdoor use", "/services/backyard-design"],
  ["03", "Garden Bed + Entry", "Focused, high-impact areas", "/services/garden-bed-entry"],
  ["04", "Patio + Outdoor Living", "Gathering, circulation and planting", "/services/patio-outdoor-living"],
  ["05", "Multi-Area Property", "One direction across connected spaces", "/services/multi-area-property"],
];

const primaryNav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Projects", "/portfolio"],
  ["Pricing", "/pricing"],
  ["Garden Guides", "/garden-guides"],
  ["Contact", "/contact"],
];

export default function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (href) => href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  const servicesActive = pathname.startsWith("/services");

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

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

  return (
    <header className="site-header" data-site-header="">
      <div className="container site-header__inner">
        <Link className="brand" href="/" aria-label="Orlano Gardens home">
          <img src="/assets/images/orlano-logo.jpg" alt="Orlano Gardens logo" className="brand__logo" />
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
          <span className="menu-toggle__lines" aria-hidden="true"><i></i><i></i><i></i></span>
        </button>

        <div className={`nav-backdrop${open ? " is-open" : ""}`} aria-hidden="true" onClick={() => setOpen(false)} />

        <nav className={`site-nav${open ? " is-open" : ""}`} id="site-navigation" aria-label="Primary navigation">
          <ul className="site-nav__list">
            {primaryNav.slice(0, 2).map(([label, href]) => (
              <li key={href}>
                <Link className="site-nav__link" href={href} aria-current={isActive(href) ? "page" : undefined}>{label}</Link>
              </li>
            ))}

            <li className={`nav-dropdown${servicesActive ? " is-active" : ""}`}>
              <button
                className="nav-dropdown__trigger"
                type="button"
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
                onClick={() => setServicesOpen((value) => !value)}
              >
                Services
                <svg aria-hidden="true" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m1 1.5 5 5 5-5"></path></svg>
              </button>
              <div className={`nav-dropdown__menu${servicesOpen ? " is-open" : ""}`} id="services-menu">
                {services.map(([number, title, copy, href]) => (
                  <Link href={href} key={href} onClick={() => setOpen(false)}>
                    <span className="nav-number">{number}</span>
                    <span className="nav-copy"><strong>{title}</strong><small>{copy}</small></span>
                  </Link>
                ))}
              </div>
            </li>

            {primaryNav.slice(2).map(([label, href]) => (
              <li key={href}>
                <Link className="site-nav__link" href={href} aria-current={isActive(href) ? "page" : undefined}>{label}</Link>
              </li>
            ))}
          </ul>
          <Link className="btn btn--primary btn--sm site-nav__cta" href="/get-custom-design" onClick={() => setOpen(false)}>Get Your Custom Design</Link>
        </nav>
      </div>
    </header>
  );
}
