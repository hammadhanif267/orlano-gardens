"use client";
import {useEffect,useState} from "react";
import {useRouter} from "next/navigation";
import AdminFrame from "@/components/admin/AdminFrame";
import ArticleTemplate from "@/components/ArticleTemplate";

const empty={title:"",slug:"",category:"Garden Design",excerpt:"",featuredImage:"",featuredAlt:"",author:"Orlano Gardens",status:"draft",featured:false,publishAt:"",readTime:"",updated:"",seoTitle:"",seoDescription:"",blocks:[]};
const uid=()=>`${Date.now()}-${Math.random().toString(36).slice(2)}`;
function newBlock(type){
  if(type==="list")return{id:uid(),type,style:"bullet",items:[""]};
  if(type==="faq")return{id:uid(),type,items:[{question:"",answer:""}]};
  if(type==="heading")return{id:uid(),type,level:2,text:""};
  if(type==="image")return{id:uid(),type,url:"",alt:"",caption:""};
  if(type==="callout")return{id:uid(),type,title:"Scope note",text:""};
  return{id:uid(),type,text:""};
}

export default function ArticleEditor({articleId}){
  const router=useRouter();
  const[data,setData]=useState(empty);
  const[loading,setLoading]=useState(Boolean(articleId));
  const[saving,setSaving]=useState(false);
  const[message,setMessage]=useState("");
  const[preview,setPreview]=useState(false);
  useEffect(()=>{if(!articleId)return;fetch(`/api/admin/articles/${articleId}`).then(r=>r.json()).then(d=>{setData({...empty,...d,publishAt:d.publishAt?String(d.publishAt).slice(0,16):""});setLoading(false);});},[articleId]);
  function field(key,value){setData(x=>({...x,[key]:value,...(key==="title"&&!articleId&&!x.slug?{slug:value.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}:{})}));}
  function patchBlock(i,patch){setData(x=>({...x,blocks:x.blocks.map((b,n)=>n===i?{...b,...patch}:b)}));}
  function move(i,dir){const n=i+dir;if(n<0||n>=data.blocks.length)return;const blocks=[...data.blocks];[blocks[i],blocks[n]]=[blocks[n],blocks[i]];setData({...data,blocks});}
  function remove(i){setData({...data,blocks:data.blocks.filter((_,n)=>n!==i)});}
  async function upload(file,callback){if(!file)return;setMessage("Uploading image…");const form=new FormData();form.append("file",file);const r=await fetch("/api/admin/media",{method:"POST",body:form});const d=await r.json();if(!r.ok)return setMessage(d.error||"Upload failed");callback(d.url);setMessage("Image uploaded.");}
  async function save(nextStatus){setSaving(true);setMessage("Saving…");const payload={...data,status:nextStatus||data.status};const r=await fetch(articleId?`/api/admin/articles/${articleId}`:"/api/admin/articles",{method:articleId?"PUT":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});const d=await r.json();setSaving(false);if(!r.ok)return setMessage(d.error||"Save failed");setMessage("Article saved successfully.");if(!articleId||d.id!==articleId)router.replace(`/admin/articles/${d.id}`);}
  if(loading)return <AdminFrame title="Article editor"><p>Loading article…</p></AdminFrame>;
  return <AdminFrame title={articleId?"Edit article":"New article"} actions={<><button className="cms-secondary" onClick={()=>setPreview(!preview)}>{preview?"Return to editor":"Exact page preview"}</button><button className="cms-secondary" disabled={saving} onClick={()=>save("draft")}>Save draft</button><button className="cms-primary" disabled={saving} onClick={()=>save("published")}>Publish</button></>}>
    {preview?<div className="article-editor-preview"><ArticleTemplate article={data} preview/></div>:<div className="article-editor">
      <section className="article-editor__main">
        <label className="cms-title-field">Article title<input value={data.title} onChange={e=>field("title",e.target.value)} placeholder="Enter article title"/></label>
        <label>Excerpt<textarea rows="3" value={data.excerpt} onChange={e=>field("excerpt",e.target.value)} placeholder="Short summary shown on the article card"/></label>
        <div className="block-toolbar"><span>Add content:</span>{["paragraph","heading","list","quote","callout","image","faq"].map(type=><button type="button" key={type} onClick={()=>field("blocks",[...data.blocks,newBlock(type)])}>+ {type}</button>)}</div>
        <div className="block-list">{data.blocks.map((block,i)=><BlockEditor key={block.id} block={block} index={i} patch={x=>patchBlock(i,x)} move={d=>move(i,d)} remove={()=>remove(i)} upload={upload}/>)}</div>
        {!data.blocks.length&&<div className="cms-empty">Add the first content block. The final page keeps the original Orlano Gardens article structure automatically.</div>}
      </section>
      <aside className="article-editor__side">
        <div className="cms-panel"><h2>Publishing</h2>
          <label className="featured-toggle"><input type="checkbox" checked={Boolean(data.featured)} onChange={e=>field("featured",e.target.checked)}/> Feature this article manually</label>
          <label>Status<select value={data.status} onChange={e=>field("status",e.target.value)}><option value="draft">Draft</option><option value="published">Published</option><option value="scheduled">Scheduled</option></select></label>
          {data.status==="scheduled"&&<label>Publish date<input type="datetime-local" value={data.publishAt} onChange={e=>field("publishAt",e.target.value)}/></label>}
          <label>Author<input value={data.author} onChange={e=>field("author",e.target.value)}/></label>
          <label>Category<input value={data.category} onChange={e=>field("category",e.target.value)}/></label>
          <label>Read time<input value={data.readTime} onChange={e=>field("readTime",e.target.value)} placeholder="Auto calculated if empty"/></label>
          <label>URL slug<input value={data.slug} onChange={e=>field("slug",e.target.value)}/></label>
        </div>
        <div className="cms-panel"><h2>Featured image</h2>{data.featuredImage&&<img className="cms-media-preview" src={data.featuredImage} alt=""/>}<label className="cms-upload">Choose and upload image<input type="file" accept="image/png,image/jpeg,image/webp,image/gif,image/avif" onChange={e=>upload(e.target.files?.[0],url=>field("featuredImage",url))}/></label><label>Alt text<input value={data.featuredAlt} onChange={e=>field("featuredAlt",e.target.value)}/></label></div>
        <div className="cms-panel"><h2>SEO</h2><label>SEO title<input value={data.seoTitle} onChange={e=>field("seoTitle",e.target.value)}/></label><label>Meta description<textarea rows="4" value={data.seoDescription} onChange={e=>field("seoDescription",e.target.value)}/></label></div>
      </aside>
    </div>}
    {message&&<div className="cms-save-message">{message}</div>}
  </AdminFrame>;
}

function BlockEditor({block,index,patch,move,remove,upload}){
  return <article className="content-block"><header><strong>{index+1}. {block.type}</strong><div><button type="button" onClick={()=>move(-1)}>↑</button><button type="button" onClick={()=>move(1)}>↓</button><button type="button" className="danger" onClick={remove}>Delete</button></div></header>
    {block.type==="heading"&&<><select value={block.level} onChange={e=>patch({level:Number(e.target.value)})}><option value="2">Heading 2</option><option value="3">Heading 3</option></select><input value={block.text} onChange={e=>patch({text:e.target.value})} placeholder="Heading text"/></>}
    {["paragraph","quote","callout"].includes(block.type)&&<>{block.type==="callout"&&<input value={block.title||""} onChange={e=>patch({title:e.target.value})} placeholder="Box heading"/>}<textarea rows={block.type==="paragraph"?6:3} value={block.text} onChange={e=>patch({text:e.target.value})} placeholder={block.type==="callout"?"Highlighted information":"Write text…"}/></>}
    {block.type==="list"&&<><select value={block.style} onChange={e=>patch({style:e.target.value})}><option value="bullet">Bullet points</option><option value="number">Numbered points</option></select>{block.items.map((item,i)=><div className="list-row" key={i}><input value={item} onChange={e=>patch({items:block.items.map((x,n)=>n===i?e.target.value:x)})}/><button type="button" onClick={()=>patch({items:block.items.filter((_,n)=>n!==i)})}>×</button></div>)}<button type="button" className="cms-secondary" onClick={()=>patch({items:[...block.items,""]})}>+ Add point</button></>}
    {block.type==="faq"&&<>{block.items.map((item,i)=><div className="faq-edit-row" key={i}><input value={item.question} onChange={e=>patch({items:block.items.map((x,n)=>n===i?{...x,question:e.target.value}:x)})} placeholder="Question"/><textarea rows="3" value={item.answer} onChange={e=>patch({items:block.items.map((x,n)=>n===i?{...x,answer:e.target.value}:x)})} placeholder="Answer"/><button type="button" className="danger" onClick={()=>patch({items:block.items.filter((_,n)=>n!==i)})}>Remove question</button></div>)}<button type="button" className="cms-secondary" onClick={()=>patch({items:[...block.items,{question:"",answer:""}]})}>+ Add question</button></>}
    {block.type==="image"&&<>{block.url&&<img className="cms-media-preview" src={block.url} alt=""/>}<label className="cms-upload">Choose and upload image<input type="file" accept="image/png,image/jpeg,image/webp,image/gif,image/avif" onChange={e=>upload(e.target.files?.[0],url=>patch({url}))}/></label><input value={block.alt} onChange={e=>patch({alt:e.target.value})} placeholder="Image alt text"/><input value={block.caption} onChange={e=>patch({caption:e.target.value})} placeholder="Optional caption"/></>}
  </article>;
}
