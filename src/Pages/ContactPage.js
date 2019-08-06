import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Banner from '../Components/Banner.component';
import ContactPageForm from "../Pages/ContactPageForm";
import { conditionalExpression } from "@babel/types";
import { Container } from "react-bootstrap";

class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      loading: false
    };

    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    // loading
    this.setState({ loading: true });

    // get all the comments
    fetch("http://localhost:8080/qac/comments")
      .then(res => res.json())
      .then(res => {
        this.setState({
          comments: res,
          loading: false
        });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  /**
   * Add new comment
   * @param {Object} comment
   */
  addComment(comment) {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments]
    });
  }

  render() {
    
    return (
      <div>
      <Banner />
        <Container fluid className="homecontainer">
            <h1 className="Listingh1">DROP US A LINE</h1>
            <hr/>
      <div>
        

        <div>
          <div className="col-md-8" style = {{paddingLeft : "0"}}>
            <ContactPageForm addComment={this.addComment} />
          </div>
         
        </div>
      </div>
     
      </Container>
      </div>

    );
  }
}

export default ContactUs;