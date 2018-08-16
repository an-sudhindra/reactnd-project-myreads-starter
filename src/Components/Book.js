import React from "react";
import ShelfChanger from './ShelfChanger';

export default class Book extends React.Component {
	render() {
		return (
			<div className="book">
				<div className="book-top">
					<div
						className="book-cover"
						style={{
							width: 128,
							height: 193,
							backgroundImage:`url(${this.props.book.imageLinks.thumbnail})`
						}}
					/>
					<ShelfChanger book={this.props.book} onChangeShelf={ (book, shelf)=> this.props.onChangeShelf(book, shelf)} />
				</div>
				<div className="book-title">{this.props.book.title}</div>
				<div className="book-authors">
					{ (Array.isArray(this.props.book.authors)) ? this.props.book.authors.join(', ') : null }
				</div>
			</div>
		);
	}
}
