import {NextResponse} from "next/server";
import jwt from "jsonwebtoken";
export function proxy(request){const path=request.nextUrl.pathname;if(path==="/admin"||path.startsWith("/api/admin/login")||path.startsWith("/api/admin/password"))return NextResponse.next();const token=request.cookies.get("orlano_admin_session")?.value;if(!token)return NextResponse.redirect(new URL("/admin",request.url));try{jwt.verify(token,process.env.AUTH_SECRET);return NextResponse.next();}catch{return NextResponse.redirect(new URL("/admin",request.url));}}
export const config={matcher:["/admin/dashboard/:path*","/admin/articles/:path*","/admin/content/:path*","/admin/media/:path*","/admin/change-password/:path*"]};
