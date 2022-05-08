import React from 'react'
import {IPagination} from "./IPagination"
import "./Pagination.css"

const Pagination: React.FC<IPagination> = ({pageCount, currentPage, changePage, nextPage, lastPage}) => {
    return (
        <div className="pagination">
            <a className="pagination-link" href="#" onClick={lastPage}>Назад</a>
            <div className="pagination-pages">
                {pageCount.length && pageCount.map((page, index) => (
                    <a className={currentPage === index + 1 ? "pagination-page active" : "pagination-page"} onClick={() => changePage(index + 1)} key={index} href="#">{index + 1}</a>
                ))}
            </div>
            <a className="pagination-link" href="#" onClick={nextPage}>Далее</a>
        </div>
    )
}

export default Pagination