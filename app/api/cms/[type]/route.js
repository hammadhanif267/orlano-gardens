import {NextResponse} from "next/server";
import {getDb} from "@/lib/mongodb";
import {getContentType} from "@/lib/content-types";
export const dynamic="force-dynamic";
export async function GET(_req,{params}){try{const {type}=await params;if(!getContentType(type))return NextResponse.json([]);const db=await getDb();const rows=await db.collection("cms_records").find({type,visible:{$ne:false}}).sort({order:1}).toArray();return NextResponse.json(rows.map(({_id,...x})=>({id:String(_id),...x})));}catch{return NextResponse.json([]);}}
