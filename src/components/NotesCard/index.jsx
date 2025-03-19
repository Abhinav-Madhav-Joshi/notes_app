import { useNotes } from "../../context/notes-context";

export const NotesCard = ({ id, title, text, isPinned, isArchived, inBin, isStarred }) => {

  const { notesDispatch } = useNotes()

  const onPinClick = (id) => {
    notesDispatch({
      type: 'PIN',
      payload: id
    })
  }

  const onArchiveClick = (id) => {
    notesDispatch({
      type: 'ARCHIVE',
      payload: id
    })
  }

  const onStarClick = (id) => {
    notesDispatch({
      type: 'STAR',
      payload: id
    })
  }

  const onBinClick = (id) => {
    notesDispatch({
      type: 'BIN',
      payload: id
    })
  }

  const onDeleteClick = (id) => {
    notesDispatch({
      type: 'DELETE',
      payload: id
    })
  }

  return (
    <div key={id} className="note">
      <div className="note-title">
        <span style={{ fontWeight: "bold", fontSize: "110%" }}> {title} </span>
        { !isArchived && !inBin && !isStarred &&
          <button onClick={()=>onPinClick(id)}>
            <span class={isPinned?"material-icons button-hover":"material-icons-outlined button-hover"} style={{marginTop:'0.2cap'}}> push_pin </span>
          </button>
        }
      </div>
      {text}
      <div className="note-footer">
        {  
        !inBin && !isStarred &&
        <button onClick={()=>onArchiveClick(id)}>
        {  
          isArchived ? <span class="material-icons-outlined button-hover"> unarchive </span> :
          <span class="material-icons-outlined button-hover"> archive </span>
        }  
        </button>
        }    

        {
        !inBin &&
        <button onClick={()=>onStarClick(id)}>
        {  
          isStarred ? <span class="material-icons button-hover"  style={{color:"#eab308"}}> star </span> :
          <span class="material-symbols-outlined button-hover"> star </span>
        }
        </button>
        }

        { 
          inBin ? <>
          <button onClick={()=>onBinClick(id)}>
            <span class="material-symbols-outlined button-hover"> restore_from_trash </span>
          </button>  
          <button onClick={()=>onDeleteClick(id)}>
            <span class="material-symbols-outlined button-hover"> delete_forever </span> 
          </button> 
          </> :
          <button onClick={()=>onBinClick(id)}>
          <span class="material-symbols-outlined button-hover"> delete </span>  
          </button>
        }

      </div>
    </div>
  );
};
