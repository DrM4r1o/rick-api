import './pager.css'

import { useState } from 'react'
import { useEffect } from 'react'

export default function Pager({ page, lastPage, handlePage }) {
    const [pageDivider, setPageDivider] = useState(1)
    const [numberOfButtons, setNumberOfButtons] = useState(5)

    useEffect(() => {
        if(page === 1) {
            setPageDivider(page)
            setNumberOfButtons(5)
        }
        if(page === lastPage) {
            const newPageDivider = getPrevDivder(lastPage) + 1
            setPageDivider(newPageDivider)
            setNumberOfButtons((lastPage - newPageDivider) + 1)
        }
    }, [page])

    const updatePageDivider  = (newValue, { advance }) => {
        let difference = lastPage - newValue
        let isDivisible = false
        let newPageDivider = 1
        
        if(advance) {
            isDivisible = page % 5 === 0
            newPageDivider = newValue
        } else {
            isDivisible = newValue % 5 === 0
            newPageDivider = page - 5
            difference =  lastPage - (page - 5)
        }

        if(isDivisible) {
            setPageDivider(newPageDivider)
            setNumberOfButtons(difference < 5 ? difference + 1 : 5)
        }
    }

    const nextPage = () => {
        if (page < lastPage) {
            updatePageDivider(page + 1, { advance: true })
            handlePage(page + 1)
        }
    }

    const prevPage = () => { 
        if (page > 1) {
            updatePageDivider(page - 1, { advance: false })
            handlePage(page - 1);
        }
    }

    const getPrevDivder = (page) => {
        for (let i = page; i > 0; i--) {
            if(i % 5 === 0) return i
        }
    }

    const toFirstPage = () => handlePage(1)
    const toLastPage = () => handlePage(lastPage)
    

    const ButtonsPages = () => {
        return <>
            {Array.from({ length: numberOfButtons }, (_, i) => (
                <button
                    style={{ backgroundColor: pageDivider + i === page && "#E6D82D" }}
                    key={page + i}
                    onClick={() => handlePage(pageDivider + i)}
                >{pageDivider + i}</button>
            ))}
        </>
    }

    return (
        <div className='pager'>
            <div>
                <button onClick={toFirstPage}>First</button>
                <button onClick={prevPage} disabled={page <= 1}>Prev</button>
            </div>
            <div>
                <ButtonsPages />
            </div>
            <div>
                <button onClick={nextPage} disabled={page >= lastPage}>Next</button>
                <button onClick={toLastPage}>Last</button>
            </div>
        </div>
    )
}