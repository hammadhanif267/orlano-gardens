import {notFound} from "next/navigation";
import {getContentType} from "@/lib/content-types";
import ContentManager from "./ContentManager";
export default async function Page({params}){const {type}=await params;const schema=getContentType(type);if(!schema)notFound();return <ContentManager type={type} schema={schema}/>;}
