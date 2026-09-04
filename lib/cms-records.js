import {getDb} from "./mongodb";
export async function getPublicRecords(type){try{const db=await getDb();return await db.collection("cms_records").find({type,visible:{$ne:false}}).sort({order:1}).toArray();}catch{return[];}}
