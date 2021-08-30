import React from 'react'

function Show(props) {
    const {results, info} = props;
    return (
        <div className="show">
            <div className="show-info">{info ? `Search Time: ${info.searchTime}`: ''}, {info ? `Total Result: ${info.totalResults}`: ''}</div>
            <br />
            <div className="result">{results.length > 0 ? results.map(result =>(
                <div className="show__details">
                <div className="show__link">{result.displayLink}</div>
                <div className="show__title"><a href={result.link}>{result.title}</a></div>
                <div className="show__description">
                    <p>{result.snippet}</p>
                </div>
                </div>
            )) : ''}</div>
        </div>
    )
}

export default Show;