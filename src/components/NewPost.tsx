import { useState } from "react";
import TipTap from "./TipTap";
import ShowPost from "./ShowPost";

const NewPost = ()=>{
    const [htmlContent, setHtmlContent] = useState('');
   const handleHtmlSave = (html:string)=>{
    setHtmlContent(html);
   }
  return (
    <>
      <TipTap handleHtmlSave={handleHtmlSave}/>
      <hr />
      <ShowPost htmlContent={htmlContent}/>
    </>
  )
}

export default NewPost;