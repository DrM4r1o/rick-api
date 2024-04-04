import './pager.css'

export default function Pager({page, lastPage, handlePage}) {

    function nextPage() {
        if (page < lastPage) {
            handlePage(page + 1)
        }
    }

    function prevPage() {
        if (page > 1) {
            handlePage(page - 1);
        }
    }

    return (
        <div className='pager'>
            <button onClick={prevPage} disabled={page <= 1}>Prev</button>
            <p>{page}/{lastPage}</p>
            <button onClick={nextPage} disabled={page >= lastPage}>Next</button>
        </div>
    )
}