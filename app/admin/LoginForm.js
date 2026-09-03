"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function LoginForm(){
  const [email,setEmail]=useState("orlanogardens@gmail.com"),[password,setPassword]=useState(""),[error,setError]=useState(""),[loading,setLoading]=useState(false);
  const router=useRouter();
  async function submit(e){
    e.preventDefault(); setLoading(true); setError("");
    const r=await fetch("/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email,password})});
    const d=await r.json(); setLoading(false);
    if(!r.ok){setError(d.error||"Login failed");return}
    router.push("/admin/dashboard");
  }
  return <main style={{minHeight:"100vh",display:"grid",placeItems:"center",padding:24,fontFamily:"system-ui"}}>
    <form onSubmit={submit} style={{width:"100%",maxWidth:420,padding:32,border:"1px solid #ddd",borderRadius:16,boxShadow:"0 10px 35px rgba(0,0,0,.08)"}}>
      <h1 style={{marginTop:0}}>Orlano Gardens Admin</h1><p>Secure administrator login</p>
      <label>Email</label><input value={email} onChange={e=>setEmail(e.target.value)} type="email" required style={{width:"100%",padding:12,margin:"6px 0 16px"}}/>
      <label>Password</label><input value={password} onChange={e=>setPassword(e.target.value)} type="password" required style={{width:"100%",padding:12,margin:"6px 0 16px"}}/>
      {error&&<p style={{color:"crimson"}}>{error}</p>}
      <button disabled={loading} style={{width:"100%",padding:12}}>{loading?"Signing in…":"Login"}</button>
    </form>
  </main>
}
