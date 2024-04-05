import { useState } from "react";

export default useLocalStorage = (key) => {
    const [data, setData] = useState(JSON.parse(localStorage.getItem(key) || "[]"))

    function getLocal(){
        return data
    }

    function setLocal(newData){
        localStorage.setItem(key, JSON.stringify(newData))
        setData(newData)
    }

    return [getLocal, setLocal]
}
