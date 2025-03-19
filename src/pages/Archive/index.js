import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { useNotes } from "../../context/notes-context";
import { NotesCard } from "../../components/NotesCard";

export const Archive = () =>{

    const { notes } = useNotes();

    return(
        <>
            <Navbar />
            <main style={{display:"flex"}}>
                <Sidebar />
                <div className="notes-area">
                {
                    notes.map(({id,title,text,isPinned,isArchived,isStarred})=>(
                    isArchived && <NotesCard id={id} title={title} text={text} isPinned={isPinned} isArchived={isArchived} isStarred={isStarred}/>
                    ))
                }
                </div>
            </main>
        </>
    )
}