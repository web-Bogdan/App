import {Dispatch} from "react"
import {Actions, TActions} from "./NotesReducer"
import axios from "axios"

// Fetch notes
export const fetchNotes = (url: string) => {
    return async (dispatch: Dispatch<TActions>) => {
        try {
            dispatch({type: Actions.LOAD_START})
            const response = await axios.get(url)
            dispatch({type: Actions.LOAD_SUCCESS, payload: response.data})

        } catch (e){
            dispatch({type: Actions.LOAD_ERROR, payload: "Error when loading data"})
        }
    }
}