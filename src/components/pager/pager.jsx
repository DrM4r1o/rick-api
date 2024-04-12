import './pager.css'

import { useState } from 'react'
import { useEffect } from 'react'
import PageIndicator from '../page-indicator/PageIndicator'

export default function Pager({ page, lastPage, handlePage }) {

    const nextPage = () => {
        if (page < lastPage) {
            handlePage(page + 1)
        }
    }

    const prevPage = () => { 
        if (page > 1) {
            handlePage(page - 1);
        }
    }

    const toFirstPage = () => handlePage(1)
    const toLastPage = () => handlePage(lastPage)

    return (
        <div className='pager'>
            <div>
                <button onClick={toFirstPage}>First</button>
                <button onClick={prevPage} disabled={page <= 1}>Prev</button>
            </div>
            <div>
                <PageIndicator page={page} lastPage={lastPage} divider={3} handlePage={handlePage} />
            </div>
            <div>
                <button onClick={nextPage} disabled={page >= lastPage}>Next</button>
                <button onClick={toLastPage}>Last</button>
            </div>
        </div>
    )
}