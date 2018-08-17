import React from 'react';
import Book from './Book';

export default class SearchList extends React.Component {
	componentWillReceiveProps(nextProps){
		// console.log(nextProps);
	}

	render(){
		const { searchBooks } = this.props;
		return (
			<div className="search-books-results">
				<ol className="books-grid">
					{(Array.isArray(searchBooks)) ?
						searchBooks.map( (b, bIndex) => {
							return <li key={"li_"+bIndex}>
								<Book book={b}  books={this.props.books} onChangeShelf={ (book, shelf) => this.props.onUpdateShelf(book, shelf) } />
							</li>
						} ) : null
					}
				</ol>
			</div>
		)
	}
}