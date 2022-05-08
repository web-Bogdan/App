import React, {useEffect, useState} from 'react'
import AppInput from "../components/Search/Search"
import Table from "../components/Table/Table"
import Pagination from "../components/Pagination/Pagination"
import {useTypedSelector} from "../hooks/useTypedSelector"
import {INote} from "../store/reducers/NotesReducer"

interface INotes {
    currentPage: number,
    setCurrentPage: (arg: number) => void
}

const Notes: React.FC<INotes> = ({currentPage, setCurrentPage}) => {
    // Get notes list from store
    const {notes} = useTypedSelector(state => state.notes)
    const pageCount = Array(Math.floor(notes.length / 10)).fill(0)
    const [currentNotes, setCurrentNotes] = useState<INote[]>([])
    // Sort type ask or desk
    const [sortType, setSortType] = useState<"ask" | "desk">("desk")
    const changePage = (number: number): void => {
        setCurrentPage(number)
    }
    const nextPage = (): void => {
        if (currentPage < notes.length / pageCount.length){
            setCurrentPage(currentPage + 1)
            setCurrentNotes(notes.slice((pageCount.length * (currentPage - 1)), pageCount.length * (currentPage)))
        }
    }
    const lastPage = (): void => {
        if (currentPage > 1){
            setCurrentPage(currentPage - 1)
            setCurrentNotes(notes.slice((pageCount.length * (currentPage - 1)), pageCount.length * (currentPage)))
        }
    }

   const sortData = (type: "string" | "number", title: string): void => {
        if (type === "number"){
            if(sortType === "desk" ) {

                // @ts-ignore
                setCurrentNotes([...currentNotes].sort((a, b) => b[title] - a[title]))
                setSortType("ask")
            } else {
                // @ts-ignore
                setCurrentNotes([...currentNotes].sort((a, b) => a[title] - b[title]))
                setSortType("desk")
            }
        }
        else {
            if(sortType === "desk") {
                // @ts-ignore
                setCurrentNotes([...currentNotes].sort((a, b) => b[title].localeCompare(a[title])))
                setSortType("ask")
            } else {
                // @ts-ignore
                setCurrentNotes([...currentNotes].sort((a, b) => a[title].localeCompare(b[title])))
                setSortType("desk")
            }
        }
   }


    useEffect(() => {
        setCurrentNotes(notes.slice((pageCount.length * (currentPage - 1)), pageCount.length * (currentPage)))
    }, [currentPage, notes])

    return (
        <div>
            <div className="container">
                <AppInput placeholder="Поиск" width="631px" height="52px"/>
                <Table notes={currentNotes} sortData={sortData}/>
                <Pagination pageCount={pageCount} currentPage={currentPage} changePage={changePage} nextPage={nextPage} lastPage={lastPage}/>
            </div>
        </div>
    )
}

export default Notes