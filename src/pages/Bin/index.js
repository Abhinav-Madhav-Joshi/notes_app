import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { NotesCard } from "../../components/NotesCard";
import { useNotes } from "../../context/notes-context";

export const Bin = () =>{

    const { notes } = useNotes()

    return(
        <>
            <Navbar />
            <main style={{display:"flex"}}>
                <Sidebar />
                <div className="notes-area">
                {
                    notes.map(({id,title,text,isPinned,isArchived,inBin})=>(
                    inBin && <NotesCard id={id} title={title} text={text} isPinned={isPinned} isArchived={isArchived} inBin={inBin}/>
                    ))
                }
                </div>
            </main>
        </>
    )
}