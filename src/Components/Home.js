import React from 'react'
import '../App.css'
import './Home.css'
import { FaMicrophone, FaSistrix } from "react-icons/fa";

function Home(props) {
    const [state, setState] = React.useState()
    const searchGoogle = (e) => {
        props.history.push({ pathname: '/search', state });
    }
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__logo">
                    <h1 className="Google">
                        <span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span>
                    </h1>
                </div>
                <form className="home__form" onSubmit={searchGoogle}>
                    <div className="home__input">
                        <FaSistrix className="search__icon" />
                        <input className="home__inpu" placeholder="Search" type="text" className="home__inpu" onChange={(e) => setState(e.target.value)} value={state} />
                        <FaMicrophone className="mic" />
                    </div>
                    <input type="submit" className="ho_for_input" value="Google Search" />

                </form>
            </div>
        </div>
    )
}

export default Home
