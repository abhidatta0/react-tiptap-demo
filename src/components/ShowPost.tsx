import parse from 'html-react-parser';

const ShowPost = ({htmlContent}:{htmlContent: string})=>{
   return <>{parse(htmlContent)}</>
}

export default ShowPost;
