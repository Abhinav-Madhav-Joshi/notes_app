import { v4 as uuid } from 'uuid'

export const notesReducer = (state,{type,payload}) => {
    switch (type) {
        case "TITLE": 
            return {...state, title:payload}

        case "TEXT": 
            return {...state, text:payload}

        case "ADD": 
            return {...state, notes:[...state.notes,{title: state.title, text: state.text, id:uuid(), isPinned:false, isArchived:false, inBin:false, isStarred:false}]}

        case "CLEAR": 
            return {...state, title:'', text:''}

        case "PIN":
            return {...state, notes:state.notes.map(note => note.id==payload?{...note, isPinned: !note.isPinned}:note)}

        case "ARCHIVE":
            return {...state, notes:state.notes.map(note => note.id==payload?{...note, isPinned: false, isArchived: !note.isArchived}:note)}

        case "BIN":
            return {...state, notes:state.notes.map(note => note.id==payload?{...note, isPinned:false, isArchived:false, isStarred:false, inBin:!note.inBin}:note)}

        case "STAR":
            return {...state, notes:state.notes.map(note => note.id==payload?{...note, isPinned:false, isArchived:false, isStarred:!note.isStarred}:note)}   
            
        case "DELETE":
            return {...state, notes:state.notes.filter(note => note.id!==payload)}   
            
        default:
            return state;
    }
}