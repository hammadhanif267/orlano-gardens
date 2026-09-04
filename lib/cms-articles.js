import {getDb} from "./mongodb";
export async function getPublishedArticles(){try{const db=await getDb();return await db.collection("articles").find({status:"published",$or:[{publishAt:null},{publishAt:{$lte:new Date()}}]}).sort({featured:-1,publishAt:-1,updatedAt:-1}).toArray();}catch{return[];}}
export async function getPublishedArticle(slug){try{const db=await getDb();return await db.collection("articles").findOne({slug,status:"published",$or:[{publishAt:null},{publishAt:{$lte:new Date()}}]});}catch{return null;}}
