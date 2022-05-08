import React, {useEffect, useState} from 'react'
import Notes from "./pages/Notes"
import './App.css'
import {fetchNotes} from "./store/reducers/ActionCreators";
import {useDispatch} from "react-redux";


const App = () => {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState<number>(1)
    useEffect( () => {
        // @ts-ignore
        dispatch(fetchNotes("https://jsonplaceholder.typicode.com/posts"))
    }, [])
  return (
      <div className="App">
        <Notes currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
  )
}

export default App