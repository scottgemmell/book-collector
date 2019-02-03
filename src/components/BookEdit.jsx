import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import FieldInput from "./FieldInput.jsx";
import { editBook } from "../redux/actions/books.actions";

class BookEdit extends Component {
	constructor(props){
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		const { editBook, history, books } = this.props;

		editBook({ 
			id: this.idInput.value, 
			title: this.titleInput.value, 
			author: this.authorInput.value, 
		}, books);
		history.push("/");
	}

	render(){

		const { match: { params: { id } }, books } = this.props;
		const book = books.find(book => book.id === id);
		

		return (
			<div>
				<h2>
					Edit
				</h2>
				<div className="c-book">
					<Form onSubmit={this.handleSubmit}>
						<FieldInput 
							inputRef={(input) => {
								this.idInput = input;
							}} 
							id="fieldId" 
							disabled 
							name="id"
							value={book.id}
							title="Enter an ID"
							hideLabel={true} 
							modifier="c-controls__input c-controls__input--id"
						/>

						<FieldInput 
							inputRef={(input) => {
								this.titleInput = input;
							}} 
							id="fieldTitle" 
							name="title"
							value={book.title}
							title="Enter a Title"
							hideLabel={true} 
							modifier="c-controls__input c-controls__input--title"
						/>

						<FieldInput 
							inputRef={(input) => {
								this.authorInput = input;
							}} 
							id="fieldAuthor" 
							name="author"
							value={book.author}
							title="Enter a Author"
							hideLabel={true} 
							modifier="c-controls__input c-controls__input--author"
						/>
						
						<Button bsStyle="primary" type="submit">
							Edit Book
						</Button>
					</Form>
				</div>
			</div>
		);
	}
}

BookEdit.propTypes = {
	handleSubmit: PropTypes.func,
	editBook: PropTypes.func,
};

const mapStateToProps = state => ({
	books: state.books,
});

export default connect(mapStateToProps, { editBook })(BookEdit);