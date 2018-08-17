import React from "react";
import ShelfChanger from './ShelfChanger';

export default class Book extends React.Component {
	getShelf(b){
		let _s = this.props.books.filter(k => (k.id === b.id))
		if(_s.length){
			return _s[0].shelf;
		}
		return "none";
	}
	render() {
		const bgImage = (this.props.book.hasOwnProperty('imageLinks')) ? this.props.book.imageLinks.thumbnail : undefined;
		const _shelf = this.getShelf(this.props.book);

		return (
			<div className="book">
				<div className="book-top">
					<div
						className="book-cover"
						style={{
							width: 128,
							height: 193,
							backgroundImage:`url(${bgImage})`
						}}
					/>
					<ShelfChanger book={this.props.book} shelf={_shelf} onChangeShelf={ (book, shelf)=> this.props.onChangeShelf(book, shelf)} />
				</div>
				<div className="book-title">{this.props.book.title}</div>
				<div className="book-authors">
					{ (Array.isArray(this.props.book.authors)) ? this.props.book.authors.join(', ') : null }
				</div>
			</div>
		);
	}
}
