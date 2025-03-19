import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { NotesCard } from "../../components/NotesCard";
import { useNotes } from "../../context/notes-context";

export const Home = () =>{

    const { title, text, notes, notesDispatch } = useNotes();

    const onTitleChange = (e) => {
        notesDispatch({
            type: 'TITLE',
            payload: e.target.value
        })
    }

    const onTextChange = (e) => {
        notesDispatch({
            type: 'TEXT',
            payload: e.target.value
        })
    }

    const onButtonClick = () => {
        notesDispatch({
            type: 'ADD'
        })
        notesDispatch({
            type: 'CLEAR'
        })
    }

    const pinnedNotes = notes.filter(note => note.isPinned === true);

    return(
        <>
            <Navbar />
            <main style={{display:"flex"}}>
                <Sidebar />
                <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
                    <div className="input">
                        <input value={title} onChange={onTitleChange} placeholder="Enter Title" className="title-input"/>
                        <div style={{display:"flex",position:"relative"}}>
                            <textarea value={text} onChange={onTextChange} placeholder="Enter Text" className="text-input"/>    
                            <button disabled={title.length==0 || text.length===0} onClick={onButtonClick} className="add-button button-hover">
                                <span class="material-icons-outlined check-icon" style={{fontSize:"3cap"}}>check_circle</span>
                            </button>
                        </div>            
                    </div>

                    {pinnedNotes.length>0 ? <div className="notes-area">
                    {    
                        pinnedNotes.map(({id,title,text,isPinned,isArchived,inBin,isStarred})=>(
                            !isArchived && !inBin && !isStarred && <NotesCard id={id} title={title} text={text} isPinned={isPinned} isArchived={isArchived} inBin={inBin} isStarred={isStarred}/>
                        ))
                    }    
                    </div>  : null}

                    <div className="notes-area">
                    {
                        notes.map(({id,title,text,isPinned,isArchived,inBin,isStarred})=>(
                            !isPinned && !isArchived && !inBin && !isStarred && <NotesCard id={id} title={title} text={text} isPinned={isPinned} isArchived={isArchived} inBin={inBin} isStarred={isStarred}/>
                        ))
                    }
                    </div>
                </div>    
            </main>
        </>
    )
}