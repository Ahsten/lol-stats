type PaginationProps = {
    page: {
        data: any[],
        start: number,
        end: number,
        size: number,
        total: number,
        currentPage: number,
        lastPage: number,
        url: {
            current: string,
            prev: string | undefined,
            next: string | undefined
        }
    }
}

function Pagination({ page } : PaginationProps){

    const pages = []
    for(let x = 1; x <= page.lastPage; x++){
        pages.push(<a className="join-item btn" href={`/leaderboards/${x}`}>{x}</a>)
    }

    return<div className="join place-content-center">
        {pages}
    </div>
}

export default Pagination;