import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {getBooksError, getBooks, getBooksPending} from './app/reducer';

import BookList from './BookList';
import fetchBooks from './app/fetchBooks';

import JF from './jf-martin.jpeg';

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
            <div className='App'>
                <nav>
                    <section>
                    <h1>Badass book store where you can't really buy books</h1>
                    </section>
                </nav>
                <section className="medium-container">
                    <h2>Books</h2>    
                    {error && <span className='books-list-error'>{error}</span>}
                    <BookList books={books} />
                    <div>
                        <img src={JF} alt="jf" className="jf-image"/>
                    </div>
                </section>
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