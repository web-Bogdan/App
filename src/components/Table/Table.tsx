import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import {ITable} from "./ITable"
import "./Table.css"

const Table: React.FC<ITable> = ({notes, sortData}) => {
    return (
        <table className="table">
            <thead className="table-head">
                <tr>
                    <th className="table-header header-id" onClick={() => sortData("number", "id")}>id</th>
                    <th className="table-header header-title" onClick={() => sortData("string", "title")}>Заголовок</th>
                    <th className="table-header header-description" onClick={() => sortData("string", "body")}>Описание</th>
                </tr>
            </thead>
            <tbody className="table-body">
                {notes.length && notes.map(note => (
                    <tr >
                        <td className="table-ceil ceil-id">{note.id}</td>
                        <td className="table-ceil ceil-title">{note.title}</td>
                        <td className="table-ceil ceil-description">{note.body}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table