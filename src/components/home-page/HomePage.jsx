import './HomePage.css'

import { Link } from "react-router-dom"

function HomePage() {
    return (
        <main>
            <Link to={"/characters"}>SEE ALL CHARACTERS</Link>
        </main>
    )
}

export default HomePage