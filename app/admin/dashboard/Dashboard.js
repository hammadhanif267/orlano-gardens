"use client";
import Link from "next/link";
import AdminFrame from "@/components/admin/AdminFrame";
const modules=[
  ["Articles","Write, format, publish and manage Garden Guide posts.","/admin/articles","Primary"],
  ["Pages","Edit homepage, About, contact and core page content.","/admin/content/pages","Content"],
  ["Services & Pricing","Manage packages, pricing, deliverables and links.","/admin/content/services","Commerce"],
  ["Portfolio","Create projects, case studies and before-and-after entries.","/admin/content/portfolio","Proof"],
  ["Products","Manage ready-to-use designs and galleries.","/admin/content/products","Commerce"],
  ["Reviews","Add, edit, verify and reorder client feedback.","/admin/content/reviews","Proof"],
  ["FAQs","Manage questions, answers and categories.","/admin/content/faqs","Content"],
  ["Legal Pages","Edit privacy, terms, cookies, disclaimer and accessibility.","/admin/content/legal","Legal"],
  ["Media Library","Upload, reuse and delete website images.","/admin/media","Media"],
  ["Navigation & Footer","Manage menus, calls to action and social links.","/admin/content/navigation","Global"],
  ["SEO & Settings","Control global metadata and website settings.","/admin/content/settings","System"],
];
export default function Dashboard(){return <AdminFrame title="Dashboard" actions={<Link className="cms-primary" href="/admin/articles/new">+ New article</Link>}><section className="cms-welcome"><div><span>Content management system</span><h2>Control the website from one workspace.</h2><p>All saved content, publishing states and media records are stored in MongoDB.</p></div><Link href="/" target="_blank">View live website ↗</Link></section><div className="cms-module-grid">{modules.map(([name,copy,href,tag])=><Link href={href} className="cms-module" key={name}><span>{tag}</span><h3>{name}</h3><p>{copy}</p><strong>Manage →</strong></Link>)}</div></AdminFrame>;}
