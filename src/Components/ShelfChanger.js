import React from 'react';

export default class ShelfChanger extends React.Component {
	// onChangeShelf(book, shelf){
	// 	BooksAPI.update(book, shelf).then( (res) => {
	// 		console.log(res);
	// 		BooksAPI.getAll().then( (books) => {
	// 			// console.log(books);
	// 			this.setState({ books })
	// 		})
	// 	}).catch((err) => {
	// 		console.log(err);
	// 	})
	// }

	render() {
		const _shelf = (this.props.shelf) ? this.props.shelf : ((this.props.book.shelf) ? this.props.book.shelf : "none");
		return (
			<div className="book-shelf-changer">
				<select value={_shelf} onChange={ (event) => this.props.onChangeShelf(this.props.book, event.target.value) }>
					<option value="move" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		)
	}
}