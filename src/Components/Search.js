import React, { useState } from 'react';
import './Home.css';
import { FaImages, FaMicrophone, FaSistrix } from "react-icons/fa";
import { key, cx } from "../API";
import axios from 'axios';
import Show from './Show';

function Search(props) {
    const goBack = () => {
        props.history.push('/');
    }
    const searchImages = async (ele) => {
        props.history.push('/img__search');
    }


    const [results, setResults] = useState([]);
    const [info, setInfo] = useState('');


    const searchGoogle = async (e) => {
        e.preventDefault();
        try {
            const responce = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`);

            if (responce) {
                // console.log(responce.data.item, responce.data.searchInformation);  
                setResults(responce.data.items);
                setInfo(responce.data.searchInformation);
            }
        } catch (error) {
            console.log(error);
        }
    }
    console.log(results, info)
    const [state, setState] = React.useState(props.location.state ? props.location.state : "")
    return (
        <>
            <div className="search">
                <div className="search__form">
                    <div className="search__form__logo">
                        <h1 className="Google" onClick={goBack} style={{ cursor: 'pointer' }}>
                            <span style={{ fontSize: '2rem' }}>G</span>
                            <span style={{ fontSize: '2rem' }}>o</span>
                            <span style={{ fontSize: '2rem' }}>o</span>
                            <span style={{ fontSize: '2rem' }}>g</span>
                            <span style={{ fontSize: '2rem' }}>l</span>
                            <span style={{ fontSize: '2rem' }}>e</span>
                        </h1>
                    </div>
                    <form action="" className="home__form" onSubmit={searchGoogle}>
                        <div className="search__form__input home__input">
                            <FaSistrix className="search__icon" />
                            <input type="text" placeholder="Search" className="home__inpu" value={state} onChange={(e) => setState(e.target.value)} />
                            <FaMicrophone className="mic" />
                        </div>
                    </form>

                </div>
                
                <br />
                <hr className="search__hr" />
                <Show results={results} info={info} />
            </div>
        </>
    )
}

export default Search
