import { useEffect, useState } from "react"

export default useFetch = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = (url) =>{
        setIsLoading(true)
        fetch(url)
            .then( res => res.json())
            .then( resData => setData(resData) )
            .catch( err => setError(err))
            .finally(() => setIsLoading(false))
    }

    useEffect(()=>{
        fetchData(url)
    },[url])

    return [data, isLoading, error, fetchData]
}