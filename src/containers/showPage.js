import React, { Component } from 'react';
import Review from '../components/review';

class ShowPage extends Component {
    
  state ={currentShowUsersReviews: null}

componentDidMount(){
    if (this.props.state.currentShowUsersId){
        const showUsersId = {showUsersId: this.props.state.currentShowUsersId}

        fetch("http://localhost:3000/reviews/user",{method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          Authorisation: localStorage.getItem("token")         
      },
      body: JSON.stringify(showUsersId)
    })
    .then((resp)=>resp.json())
    .then((json)=>this.setState({currentShowUsersReviews: json}))
}
}

    showReviews = () => {
    if(this.state.currentShowUsersReviews){
        
        return this.state.currentShowUsersReviews.map((review) => {
            return <Review review = {review}/>
        })
    }
    }
    render(){
        return (
            <div>
                <h1> users show page</h1>
                
                {this.showReviews()}
            </div>
          
        );
      }

}
export default ShowPage;