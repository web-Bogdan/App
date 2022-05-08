import React, {useEffect, useState} from 'react'
import Notes from "./pages/Notes"
import './App.css'
import {fetchNotes} from "./store/reducers/ActionCreators"
import {useDispatch} from "react-redux"
import {useTypedSelector} from "./hooks/useTypedSelector"
import Loader from "./components/Loader/Loader"


const App = () => {
    const {isLoading} = useTypedSelector(state => state.notes)
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState<number>(1)
    useEffect( () => {
        // @ts-ignore
        dispatch(fetchNotes("https://jsonplaceholder.typicode.com/posts"))
    }, [])
  return (
      <div className="App">
          {isLoading ? <Loader/> : <Notes currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
      </div>
  )
}

export default App