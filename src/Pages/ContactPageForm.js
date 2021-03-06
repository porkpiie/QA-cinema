
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class ContactPageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: "",
            success: "",

            comment: {
                name: "",
                email: "",
                subject: "",
                message: ""
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
            this.setState({ error: "All fields are required.", success: "" });
            return;
        }

        // loading status and clear error
        this.setState({ error: "", loading: true });

        // persist the comments on server
        let { comment } = this.state;
        fetch("http://localhost:8080/qac/contact", {
            method: "post",
            body: JSON.stringify(comment),
            headers: { 'Content-Type': 'application/json' }
        })
            // .then(res => res.json())
            // .then(res => {
            //     if (res.error) {
            //         this.setState({ loading: false, error: res.error });
            //     } else {
            //         // add time return from api and push comment to parent state
            //           // comment.time = res.time;
            //         console.log(comment);
                    this.props.addComment(comment);

                    // clear the message box
                    this.setState({
                        loading: false,
                        comment: { ...comment, message: "" }
                    });
                    this.setState({ success: "Thank you for your message" });
            //     }
            // })
            // .catch(err => {
            //     this.setState({
            //         error: "Something went wrong while submitting form.",
            //         loading: false
            //     });
            // });
    }

    /**
     * Simple validation
     */
    isFormValid() {
        return this.state.comment.name !== "" && this.state.comment.email !== "" && this.state.comment.subject !== "" && this.state.comment.message !== "";
    }

    renderError() {
        return this.state.error ? (
            <div className="alert alert-danger">{this.state.error}</div>
        ) : null;
    }

    renderSuccess() {
        return this.state.success ? (
            <div className="alert alert-success">{this.state.success}</div>
        ) : null;
    }

    render() {

        return (
            <React.Fragment>
                <form method="post" onSubmit={this.onSubmit}>

                    <Container >
                        <Row>
                            <Col xs="6" style = {{paddingLeft : "0"}}>
                            <p style={{color : "white", textAlign : "left"}}> DROP US A LINE</p><br/>
                                <div className="form-group">
                                    <input
                                        onChange={this.handleFieldChange}
                                        value={this.state.comment.name}
                                        className="form-control"
                                        placeholder="Your Name*"
                                        name="name"
                                        type="text"
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        onChange={this.handleFieldChange}
                                        value={this.state.comment.email}
                                        className="form-control"
                                        placeholder="Your Email*"
                                        name="email"
                                        type="email"

                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        onChange={this.handleFieldChange}
                                        value={this.state.comment.subject}
                                        className="form-control"
                                        placeholder="Subject*"
                                        name="subject"
                                        type="text"
                                    />
                                </div>

                                <div className="form-group">
                                    <textarea
                                        onChange={this.handleFieldChange}
                                        value={this.state.comment.message}
                                        className="form-control"
                                        placeholder="Message*"
                                        name="message"
                                        rows="5"
                                    />
                                </div>

                                {this.renderError()}
                                {this.renderSuccess()}

                                <div className="form-group" style={{ textAlign: "right" }}>
                                    <button disabled={this.state.loading} className="btn btn-primary">
                                        Send Message
                                </button>
                                </div>
                            </Col>
                            <Col xs="4" style = {{paddingLeft : "100px"}}>
                                <p style={{ color: "white", textAlign: "left" }}>ADDRESS</p><br />
                                <p style={{ color: "white", textAlign: "left" }}>Alexandra House<br />Whittingham Drive,<br />Swindon,<br />SN4 0QJ</p><br />

                                <h6 style={{ color: "white", textAlign: "left" }}>Phone</h6><br />
                                <p style={{ color: "white", textAlign: "left" }}>01793 819 000</p><br />
                            </Col>
                        </Row>
                    </Container>
                </form>
            </React.Fragment>
        );
    }
}