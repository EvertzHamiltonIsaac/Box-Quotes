import React from 'react'

const Content = ({content_prop}) => {
    return (
        <main>
            <section className='Content'>
                    <p>"{content_prop.quote}"</p>
                    <span className='AuthorName'>Author: {content_prop.author}</span>
            </section>
        </main>
    )
}

export default Content