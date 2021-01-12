import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {getBooksError, getBooks, getBooksPending} from './app/reducer';

import BookList from './BookList';
import fetchBooks from './app/fetchBooks';

class BookView extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentDidMount() {
        const {fetchBooks} = this.props;
        fetchBooks();
    }
    
    shouldComponentRender() {
        if(this.pending === false) return false;
        // more tests
        return true;
    }
    
    render() {
        const {books, error} = this.props;

        if(!this.shouldComponentRender()) return (
            <div>Waitign</div>
        )

        return (
            <div className='books-list-wrapper'>
                {error && <span className='books-list-error'>{error}</span>}
                <BookList books={books} />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    error: getBooksError(state),
    books: getBooks(state),
    pending: getBooksPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchBooks: fetchBooks
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookView);