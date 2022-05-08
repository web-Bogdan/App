import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router"
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
    const [searchValue, setSearchValue] = useState<string>("")
    // Sort type ask or desk
    const [sortType, setSortType] = useState<"ask" | "desk">("desk")
    const navigate = useNavigate()
    const changePage = (number: number): void => {
        setSearchValue("")
        setCurrentPage(number)
    }
    const nextPage = (): void => {
        if (currentPage < notes.length / pageCount.length){
            setSearchValue("")
            setCurrentPage(currentPage + 1)
            setCurrentNotes(notes.slice((pageCount.length * (currentPage - 1)), pageCount.length * (currentPage)))
        }
    }
    const lastPage = (): void => {
        if (currentPage > 1){
            setSearchValue("")
            setCurrentPage(currentPage - 1)
            setCurrentNotes(notes.slice((pageCount.length * (currentPage - 1)), pageCount.length * (currentPage)))
        }
    }
    const sortBySearch = (e?: any) => {

        if (e){
            setSearchValue(e.target.value)
        }
        if (searchValue){
            const sortedNotes = notes.filter(note => {
                if (note.title.toLowerCase().includes(searchValue.toLowerCase()) || note.body.toLowerCase().includes(searchValue.toLowerCase())){
                    return note
                }
                return false;
            })
            setCurrentNotes(sortedNotes.slice(0, pageCount.length))
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
        sortBySearch()
        navigate(String("/page" + currentPage))
    }, [currentPage, searchValue, notes])
    return (
        <div>
            <div className="container">
                <AppInput placeholder="Поиск" width="631px" height="52px" searchValue={searchValue} setSearchValue={sortBySearch}/>
                <Table notes={currentNotes} sortData={sortData} pageCount={pageCount}/>
                <Pagination pageCount={pageCount} currentPage={currentPage} changePage={changePage} nextPage={nextPage} lastPage={lastPage}/>
            </div>
        </div>
    )
}

export default Notes