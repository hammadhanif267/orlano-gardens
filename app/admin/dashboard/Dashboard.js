"use client";
import {useEffect,useState} from "react";
import {useRouter} from "next/navigation";

const modules=[
"Home hero & trust points","Reviews & review carousel","Homepage sections","Custom design service","Custom design packages","Ready-to-Use Designs",
"Ready-to-Use product details","Ready-to-Use product gallery","Portfolio projects","Portfolio categories & locations","Before & after images","Case studies",
"Client reviews & verification","Etsy Star Seller","Completed-project count","Social audience statistics","Garden guide articles","Article SEO & media",
"Related articles","FAQ","How It Works","Pricing packages","About page","Contact & social links","Header navigation & CTA","Footer & legal links",
"Logo & favicon","Announcement banner","Reusable CTAs","Media library & alt text","SEO & canonical","Open Graph","Sitemap & indexing","AdSense",
"Cookie consent","Contact submissions","Newsletter subscribers","Draft / preview / publish / schedule","Drag-and-drop ordering","Visibility controls",
"Users / roles / password","Analytics overview","Broken-link & missing-image alerts","Revision history & restore","Backup & export"
];

export default function Dashboard(){
 const router=useRouter(); const [busy,setBusy]=useState(false);
 async function logout(){setBusy(true);await fetch("/api/admin/logout",{method:"POST"});router.replace("/admin")}
 return <main style={{minHeight:"100vh",padding:"24px",fontFamily:"system-ui",background:"#f7f7f7"}}>
   <div style={{maxWidth:1200,margin:"0 auto"}}>
    <header style={{display:"flex",justifyContent:"space-between",gap:16,alignItems:"center",flexWrap:"wrap",marginBottom:24}}>
      <div><h1 style={{marginBottom:4}}>Orlano Gardens Dashboard</h1><p style={{margin:0}}>Content, media, SEO and website management</p></div>
      <button onClick={logout} disabled={busy} style={{padding:"10px 18px"}}>{busy?"Logging out…":"Logout"}</button>
    </header>
    <section style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:14}}>
      {modules.map((m,i)=><article key={m} style={{background:"#fff",border:"1px solid #e3e3e3",borderRadius:12,padding:18}}>
        <strong>{m}</strong><p style={{fontSize:13,color:"#666"}}>Manage and save this section in MongoDB.</p>
        <button disabled style={{padding:"7px 10px"}}>Manage</button>
      </article>)}
    </section>
    <p style={{marginTop:24,fontSize:13,color:"#666"}}>Session automatically expires after 12 hours. Content modules are structured for MongoDB-backed CMS expansion.</p>
   </div>
 </main>
}
