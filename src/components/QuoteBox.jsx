import React from 'react'
import Content from './Content'

const QuoteBox = ({ quote_prop, color_prop, all_again }) => {
    return (
        <main style={{color:color_prop}} className='BoxCard'>
            <Content content_prop={quote_prop}/>
            <button onClick={all_again} style={{backgroundColor:color_prop}} className='button'>&#62;</button>
        </main>
    )
}

export default QuoteBox