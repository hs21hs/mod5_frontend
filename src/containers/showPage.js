import React, { Component } from 'react';
import Review from '../components/review';
import ShowCard from '../components/show_card';
import serverURL from '../serverURL/serverURL'

class ShowPage extends Component {
    
  state ={currentShowUsersReviews: null}

componentDidMount(){
    if (this.props.state.currentShowUsersId){
        const showUsersId = {showUsersId: this.props.state.currentShowUsersId}

        fetch(serverURL+"/reviews/user",{method: "POST",
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

    ShowCard = () => {
        if(this.props.state.currentShowUsersId){
            return <ShowCard state = {this.props.state}/>
        }
        //chuck below in above if incinsistency
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
               
                {this.ShowCard()}
                {this.showReviews()}
            </div>
          
        );
      }

}
export default ShowPage;