import React from 'react'

const BookListItem = ({book}) => {
    const {name, author} = book

    return (
        <li>
            <div className="view">
                <div>
                    <p><i>{name}</i><b> by </b><i>{author}</i></p>
                </div>
            </div>
        </li>
    )
}

export default BookListItem