import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import {ITable} from "./ITable"
import "./Table.css"

const Table: React.FC<ITable> = ({notes, sortData, pageCount}) => {
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
                {pageCount.map((_, index) => (
                    <tr key={uuidv4()}>
                        <td className="table-ceil ceil-id">{notes[index]?.id || ""}</td>
                        <td className="table-ceil ceil-title">{notes[index]?.title || ""}</td>
                        <td className="table-ceil ceil-description">{notes[index]?.body || ""}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table