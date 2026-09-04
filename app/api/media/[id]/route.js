import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getDb } from "@/lib/mongodb";
export const dynamic="force-dynamic";
export async function GET(_request,{params}){try{const {id}=await params;const db=await getDb();const media=await db.collection("media").findOne({_id:new ObjectId(id)});if(!media)return new NextResponse("Not found",{status:404});return new NextResponse(media.data.buffer,{headers:{"Content-Type":media.type,"Cache-Control":"public, max-age=31536000, immutable"}});}catch{return new NextResponse("Not found",{status:404});}}
