
export interface IPagination{
    pageCount: number[],
    currentPage: number,
    changePage: (number: number) => void,
    nextPage: () => void,
    lastPage: () => void
}