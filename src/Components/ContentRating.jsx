
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likeCount: 0,
      dislikeCount: 0,
      totalRatings: 0,
      handleLike:() => {
        this.setState((prevState) => ({
          likeCount: prevState.likeCount + 1,
          totalRatings: prevState.totalRatings + 1,
        }));
        
      },
      handleDislike:() => {
        this.setState((prevState) => ({
          dislikeCount: prevState.dislikeCount + 1,
          totalRatings: prevState.totalRatings + 1,
        }));
      },
    };
    
  }
  render() {
    return (
     <>
     <div className="content-rating">
      <p>
        Solo leveling is peak 
      </p>
     </div>
     <div className='rating-buttons'>
      <button className="like-buttons" onClick={this.state.handleLike}>
        Like({this.state.likeCount})
      </button>
      <button className="dislike-buttons" onClick={this.state.handleDislike}>
        Dislike({this.state.dislikeCount})
      </button>
     </div>
    <p className="total-ratings">Total Ratings: {this.state.totalRatings}</p> 
     </>
    );
  }
}


export default ContentRating;
