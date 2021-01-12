import React from 'react'

const BookListItem = ({book}) => {
    const {name, author} = book

    return (
        <li>
            <div className="view">
                <div className="book-name">
                    {name}
                </div>
                <div className="author">
                    {author}
                </div>
            </div>
        </li>
    )
}

export default BookListItem