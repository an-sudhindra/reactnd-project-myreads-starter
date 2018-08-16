import React from 'react';
import Book from './Book';

export default class SearchList extends React.Component {
	componentWillReceiveProps(nextProps){
		// console.log(nextProps);
	}

	render(){
		const {books} = this.props; 
		return (
			<div className="search-books-results">
				<ol className="books-grid">
					{(Array.isArray(books)) ?
						books.map( (b, bIndex) => {
							return <li key={"li_"+bIndex}>
								<Book book={b} onChangeShelf={ (book, shelf) => this.props.onUpdateShelf(book, shelf) } />
							</li>
						} ) : null
					}
				</ol>
			</div>
		)
	}
}