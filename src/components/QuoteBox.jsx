import React from 'react'

const QuoteBox = ({ quote_prop, color_prop, all_again }) => {
    return (
        <main style={{color:color_prop}} className='BoxCard'>
            <p>"{quote_prop.quote}"</p>
            <span className='AuthorName'>Author: {quote_prop.author}</span>
            <button onClick={all_again} style={{backgroundColor:color_prop}} className='button'>&#62;</button>
        </main>
    )
}

export default QuoteBox