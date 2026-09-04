import {getPublicRecords} from "./cms-records";
export async function getLegalRecord(page){const records=await getPublicRecords("legal");return records.find(x=>x.page===page)||null;}
export function legalSections(record){return String(record.body||"").split(/\n\s*\n/).filter(Boolean).map((text,index)=>({id:`section-${index+1}`,title:index===0?record.title:`Section ${index+1}`,content:<p>{text}</p>}));}
