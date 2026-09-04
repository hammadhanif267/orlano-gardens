import {cookies} from "next/headers";
import {verifySession} from "./auth";
export async function requireAdmin(){const token=(await cookies()).get("orlano_admin_session")?.value;if(!token)throw new Error("UNAUTHORIZED");return verifySession(token);}
