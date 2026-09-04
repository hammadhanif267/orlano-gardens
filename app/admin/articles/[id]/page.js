import ArticleEditor from "../ArticleEditor";
export default async function Page({params}){const {id}=await params;return <ArticleEditor articleId={id}/>;}
