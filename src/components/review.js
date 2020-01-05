import React, { Component } from 'react';

class Review extends Component {

    reviewersAverageRating = ()=>{
        if (this.props.review.reviewers_avg_rating)
        {return this.props.review.reviewers_avg_rating}
        else{
            return("this user has not been rated by anyone yet")
        }
    }

  render(){
  return (
   <div>
       <h1>review</h1>
       <p>rating: {this.props.review.review.rating}</p>
       <p>content: {this.props.review.review.content}</p>
        <br/>
       <p>reviewers name:{this.props.review.reviewer_details.name}</p>
       <p>reviewers average rating:{this.reviewersAverageRating()}</p>
   </div>

  );
}
}

export default Review;