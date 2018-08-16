import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './../BooksAPI';
import SearchList from './SearchList';

export default class SearchBooks extends React.Component {
	updateBookQuery = (q) => {
		this.props.updateSearchQuery(q);
		// setState({ query: q.trim() });
		// console.log(this.state.query.trim().length);
		// if( this.state.query.trim().length > 2){
		// 	console.log("Searching database....");
		// 	BooksAPI.search(this.state.query.trim()).then( (searchResults) => {
		// 		console.log(searchResults);
		// 		this.props.onSearchResults(searchResults);
		// 		// setState({books: searchResults});
		// 	}).catch( (err) => {
		// 		// this.setState({books: []});
		// 		this.props.onSearchResults(null);
		// 		console.log("Error occured while searching : ",err);
		// 	})
		// }
	}

	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/" onClick={ this.props.doRefresh}>Close</Link>
					<div className="search-books-input-wrapper">
						{/*
							NOTES: The search from BooksAPI is limited to a particular set of search terms.
							You can find these search terms here:
							https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

							However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
							you don't find a specific author or title. Every search is limited by search terms.
						*/}
						<input type="text" placeholder="Search by title or author" value={ this.props.query } onChange={ (event) => this.props.onChange(event.target.value) } />
					</div>
				</div>
				<SearchList books={this.props.books} onUpdateShelf={ (book, shelf) => this.props.onUpdateShelf(book, shelf) } />
			</div>
		)
	}
}