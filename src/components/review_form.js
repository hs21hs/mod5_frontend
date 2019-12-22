import React, { Component } from 'react';

class ReviewForm extends Component {

  render(){
  return (
   <div>
       <h1>Would you lke to leave a review?</h1>
       
       <form onSubmit = {(e) => this.props.createReview(e,this.props.delivery_id)}>
           <label>please choose ho many stars you would rate your experience with this person</label>
           <select name = "rating">
               <option>1</option>
               <option>2</option>
               <option>3</option>
               <option>4</option>
               <option>5</option>
           </select>
           <br></br>
           <label>please tell us why you chose this rating</label>
           <input name = "content"></input>
           <button type = "submit">submit</button>
       </form>
   </div>

  );
}
}

export default ReviewForm;


