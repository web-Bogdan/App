export interface INote {
    body: string
    id: number
    title: string
    userId: number
}

interface IState {
    notes: INote[] | [],
    isLoading: boolean,
    error: string | null
}

const initialState: IState = {
    notes: [],
    isLoading: false,
    error: null
}

export enum Actions {
    LOAD_START = "LOAD_START",
    LOAD_SUCCESS = "LOAD_SUCCESS",
    LOAD_ERROR = "LOAD_ERROR"
}

interface LOAD_START {
    type: Actions.LOAD_START
}

interface LOAD_SUCCESS {
    type: Actions.LOAD_SUCCESS,
    payload: INote[]
}

interface LOAD_ERROR {
    type: Actions.LOAD_ERROR,
    payload: string
}

export type TActions = LOAD_START | LOAD_SUCCESS | LOAD_ERROR

export const notesReducer = (state = initialState, action: TActions) => {
    switch (action.type){
        case Actions.LOAD_START:
            return {...state, isLoading: true}
        case Actions.LOAD_SUCCESS:
            return {...state, notes: action.payload, isLoading: false}
        case Actions.LOAD_ERROR:
            return {...state, error: action.payload, isLoading: false}
        default:
            return state
    }
}