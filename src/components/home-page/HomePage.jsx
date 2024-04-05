import { Link } from "react-router-dom"

function HomePage() {
    return (
        <>
            <Link to={"/characters"}>SEE ALL CHARACTERS</Link>
        </>
    )
}

export default HomePage