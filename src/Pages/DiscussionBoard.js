import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import CommentList from "../Components/DiscussionCommentList";
import CommentForm from "../Components/DiscussionCommentForm";
import { conditionalExpression } from "@babel/types";
import { Container } from "react-bootstrap";
import Banner from '../Components/Banner.component';

class DiscussionBoard extends Component {
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
        <div className="banner-img-wrapper">
          <Banner/>
        </div>

        <Container fluid className="homecontainer">
        <h1 className="Listingh1">DISCUSSION BOARD</h1>
        <hr/>
        
        
        <div className="discussionboard">
        <div className="row mx-0">
        <div className="col-4  pt-4 border-right">
        <h6>DISCUSSION BOARD FOR ALL THINGS FILMS</h6><br/>
        <CommentForm addComment={this.addComment} />
        </div>
        <div className="col-8  pt-3">
        <CommentList
              loading={this.state.loading}
              comments={this.state.comments}
            />
        </div>
        </div>
        </div>
        </Container>
        </div>
    );
  }
}

export default DiscussionBoard;