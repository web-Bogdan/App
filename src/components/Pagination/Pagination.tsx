import React from 'react'
import {IPagination} from "./IPagination"
import "./Pagination.css"
import {Link} from "react-router-dom";

const Pagination: React.FC<IPagination> = ({pageCount, currentPage, changePage, nextPage, lastPage}) => {

    return (
        <div className="pagination">
            <Link className="pagination-link" to="/page1" onClick={lastPage}>Назад</Link>
            <div className="pagination-pages">
                {pageCount.length && pageCount.map((page, index) => (
                    <Link className={currentPage === index + 1 ? "pagination-page active" : "pagination-page"} onClick={(e) => changePage(index + 1)} key={index} to={String("/page"+ (index + 1))}>{index + 1}</Link>
                ))}
            </div>
            <Link className="pagination-link" to="/page10" onClick={nextPage}>Далее</Link>
        </div>
    )
}

export default Pagination