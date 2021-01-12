import React from 'react'
import { useSelector } from "react-redux";
import { getBooks } from "./app/reducer";
import BookListItem from "./BookListItem";

const BookList = () => {
    const books =  useSelector(getBooks)
    const renderedBookItems = books.map((book) => {
        return <BookListItem key={book.id} book={book} />
    })
    return <ul className="book-list">{renderedBookItems}</ul>
}

export default BookList