import React from 'react';
import Book from './Book';

class BookShelfs extends React.Component {
	state = {
		shelfsValues:["currentlyReading", "wantToRead", "read"],
		shelfs:["Currently Reading", "Want To Read", "Read"]
	}

	render(){
		const { shelfs, shelfsValues } = this.state;
		const { books } = (this.props.books) ? this.props : [];

		return (
			<div>
			{ shelfs.map( (shelf, index) => {
				return <div className="bookshelf" key={"shelf_"+index}>
					<h2 className="bookshelf-title">{ shelf }</h2>
					<div className="bookshelf-books">
						<ol className="books-grid">
							{ books.map( (b, bIndex) => {
								if( b.shelf === shelfsValues[index]) {
									return <li key={"li_"+bIndex}>
										<Book book={b} onChangeShelf={ (book, shelf) => this.props.onUpdateShelf(book, shelf)} />
									</li>
								}
							} ) }
						</ol>
					</div>
				</div>
			})}
			</div>
		)
	}
}

export default BookShelfs;