import {INote} from "../../store/reducers/NotesReducer"

export interface ITable {
    notes: INote[],
    sortData: (type: "string" | "number", title: string) => void,
    pageCount: number[]
}