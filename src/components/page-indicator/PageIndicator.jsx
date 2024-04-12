import { useEffect, useState } from "react"

const PageIndicator = ({ page, lastPage, divider, handlePage }) => {
    const [pageDivider, setPageDivider] = useState(1)
    const [numberOfButtons, setNumberOfButtons] = useState(divider)
    const [prevPage, setPrevPage] = useState(page)

    useEffect(() => {
        if(page === 1) {
            setPageDivider(page)
            setNumberOfButtons(divider)
        }
        if(page === lastPage) {
            const newPageDivider = getPrevDivder(lastPage - 1)
            setPageDivider(newPageDivider + 1)
            setNumberOfButtons(lastPage - newPageDivider)
        }
    }, [page])

    useEffect(() => {
        if(page > prevPage) {
            updatePageDivider(prevPage, { advance: true })
            setPrevPage(page)
        } else {
            updatePageDivider(prevPage, { advance: false })
            setPrevPage(page)
        }
    }, [page])

    const getPrevDivder = (page) => {
        for (let i = page; i > 0; i--) {
            if(i % divider === 0) return i
        }
    }

    const updatePageDivider  = (newValue, { advance }) => {
        let difference = lastPage - newValue
        let isDivisible = newValue % divider === 0
        let newPageDivider = page
        
        if(!advance) {
            isDivisible = page % divider === 0
            newPageDivider = newValue - divider
            difference =  lastPage - (page - divider)
        }
    
        if(isDivisible && page !== lastPage) {
            setPageDivider(newPageDivider)
            setNumberOfButtons(difference < divider ? difference : divider)
        }
    }

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

export default PageIndicator