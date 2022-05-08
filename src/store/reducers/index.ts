import {combineReducers} from "redux"
import {notesReducer} from "./NotesReducer"

export const rootReducer = combineReducers({
    notes: notesReducer
})

export type TypeReducer = ReturnType<typeof rootReducer>
