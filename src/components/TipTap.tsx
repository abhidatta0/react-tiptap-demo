import {useEditor, EditorContent} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline'

const extensions = [
    StarterKit,
    Underline,
]

const content = ``;

type Props = {
    handleHtmlSave:(html:string)=> void;
}
const TipTap = ({handleHtmlSave}:Props)=>{
    const editor = useEditor({
        extensions,
        content
    });
    if(!editor) return null;

    const handleEditorContent = ()=>{
      const html = editor.getHTML();
      handleHtmlSave(html);
    }

    return (
      <div className='m-8'>
        <div className='w-full flex flex-wrap bg-gray-600 p-3 gap-3 text-white'>
            <button onClick={()=> editor.chain().focus().toggleBold().run()} disabled={!editor.can().chain().toggleBold().run()} 
            className={editor.isActive('bold') ? 'is-active':''}>
                <strong>B</strong>
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={
                !editor.can()
                    .chain()
                    .focus()
                    .toggleItalic()
                    .run()
                }
                className={editor.isActive('italic') ? 'is-active' : ''}
            >
                <em>italic</em>
            </button>
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={
                !editor.can()
                    .chain()
                    .focus()
                    .toggleStrike()
                    .run()
                }
                className={editor.isActive('strike') ? 'is-active' : ''}
            >
                <s>S</s>
            </button>
            <button
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                className={editor.isActive('underline') ? 'is-active' : ''}
            >
                <u>U</u>
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={
                !editor.can()
                    .chain()
                    .focus()
                    .toggleCode()
                    .run()
                }
                className={editor.isActive('code') ? 'is-active' : ''}
            >
                code
            </button>

            <button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={editor.isActive('codeBlock') ? 'is-active' : ''}
            >
                code block
            </button>

            <button
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={editor.isActive('paragraph') ? 'is-active' : ''}
            >
                P
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
            >
                h1
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
            >
                h2
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
            >
                h3
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
            >
                h4
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
            >
                h5
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
            >
                h6
           </button>

           <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
                unordered list
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive('orderedList') ? 'is-active' : ''}
            >
                ordered list
            </button>

            <button
                onClick={() => editor.chain().focus().undo().run()}
                disabled={
                !editor.can()
                    .chain()
                    .focus()
                    .undo()
                    .run()
                }
            >
                undo
            </button>
            <button
                onClick={() => editor.chain().focus().redo().run()}
                disabled={
                !editor.can()
                    .chain()
                    .focus()
                    .redo()
                    .run()
                }
            >
                redo
            </button>
            

        </div>

        <div className='border border-gray-500 border-t-0 focus:outline-none'>
            <EditorContent editor={editor}/>
        </div>

        <button onClick={handleEditorContent} className='bg-green-400 px-2 py-1 rounded-md mt-5'>Save</button>
      </div>
    )
  }
  
  export default TipTap;