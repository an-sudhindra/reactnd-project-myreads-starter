import React from 'react';
import BookShelfs from './BookShelfs';
import OpenSearch from './OpenSearch';

export default class ListBooks extends React.Component {
	render() {
		// console.log(this);
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<BookShelfs books={this.props.books} onUpdateShelf={ (book, shelf) => this.props.doUpdateShelf(book, shelf)}/>
					</div>
				</div>
				<OpenSearch />
			</div>
		)
	}
}