import parse from 'html-react-parser';

const ShowPost = ({htmlContent}:{htmlContent: string})=>{
   return <div className='p-2 bg-gray-200 m-3'>
      <div className='tiptap'>{parse(htmlContent)}</div>
   </div>
}

export default ShowPost;
