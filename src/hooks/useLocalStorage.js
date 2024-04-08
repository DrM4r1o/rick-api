import { useState } from "react";
import { initialStore } from "../reducers/storeReducer";

const useLocalStorage = (key) => {
    const [data, setData] = useState(JSON.parse(localStorage.getItem(key) || JSON.stringify(initialStore)))
    
    function getLocal(){
        return data
    }

    function setLocal(newData){
        localStorage.setItem(key, JSON.stringify(newData))
        setData(newData)
    }
    
    return [getLocal, setLocal, data]
}

export default useLocalStorage
