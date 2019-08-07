
import React, { Component } from "react";
import StarRatingComponent from 'react-star-rating-component';

export default class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: "",

            comment: {
                username: "",
                film: "",
                comment: "",
                rating: 0
            }
        };

        // bind context to methods
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    /**
     * Handle form input field changes & update the state
     */
    handleFieldChange = event => {
        const { value, name } = event.target;

        this.setState({
            ...this.state,
            comment: {
                ...this.state.comment,
                [name]: value
            }
        });
    };

    /**
     * Form submit handler
     */
    onSubmit(e) {
        // prevent default form submission
        e.preventDefault();

        if (!this.isFormValid()) {
            this.setState({ error: "All fields are required." });
            return;
        }

        // loading status and clear error
        this.setState({ error: "", loading: true });

        // persist the comments on server
        let { comment } = this.state;
        fetch("http://35.176.149.141:8080/qac/comments", {
            method: "post",
            body: JSON.stringify(comment),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    this.setState({ loading: false, error: res.error });
                } else {
                    // add time return from api and push comment to parent state
                    //   comment.time = res.time;
                    console.log(comment);
                    //this.props.addComment(comment);

                    // clear the message box
                    this.setState({
                        loading: false,
                        comment: { ...comment, message: "" }
                    });
                    window.location.reload();
                }
            })
            .catch(err => {
                this.setState({
                    error: "Something went wrong while submitting form.",
                    loading: false
                });
            });
    }

    /**
     * Simple validation
     */
    isFormValid() {
        return this.state.comment.name !== "" && this.state.comment.message !== "";
    }

    renderError() {
        return this.state.error ? (
            <div className="alert alert-danger">{this.state.error}</div>
        ) : null;
    }

    render() {
        console.log(this.state.comment.rating);
        return (
            <React.Fragment>
                <form method="post" onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <input
                            onChange={this.handleFieldChange}
                            value={this.state.comment.name}
                            className="form-control"
                            placeholder="Your Name"
                            name="username"
                            type="text"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            onChange={this.handleFieldChange}
                            value={this.state.comment.film}
                            className="form-control"
                            placeholder="Film Name"
                            name="film"
                            type="text"
                        />
                    </div>

                    <div className="form-group">
                        <div className="form-control d-inline-flex" >
                            <p className="mr-auto">Rating</p>
                            <StarRatingComponent
                                starColor={'#28CDE9'}
                                emptyStarColor={'	#000000'}
                                name="rating"
                                placeholder="Rating"
                                starCount={5}
                                value={this.state.comment.rating}
                                onStarClick={(val, _prev, name) => this.handleFieldChange({ target: { name: name, value: val } })}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <textarea
                            onChange={this.handleFieldChange}
                            value={this.state.comment.message}
                            className="form-control"
                            placeholder="Your Comment"
                            name="comment"
                            rows="5"
                        />
                    </div>

                    {this.renderError()}

                    <div style={{ textAlign: "left" }} className="form-group">
                        <button disabled={this.state.loading} style={{margin: '0px'}} className="btn btn-primary">
                            Comment
            </button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}