import React, { Component } from 'react';
import serverURL from '../serverURL/serverURL'

class ShowCard extends Component {
state= {currentShowCard: null}

    componentDidMount(){
        if (this.props.state.currentShowUsersId){
        const showUsersId = {showUsersId: this.props.state.currentShowUsersId}

        fetch(serverURL+"/reviews/show_card",{method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          Authorisation: localStorage.getItem("token")         
      },
      body: JSON.stringify(showUsersId)
    })
    .then((resp)=>resp.json())
    .then((json)=>this.setState({currentShowCard: json}))
}
    }


    showCard = ()=> {
        if(this.state.currentShowCard){
            return(
                <div >
                    <h1>{this.state.currentShowCard.show_user.name}'s review page</h1>
                    <p>users name:{this.state.currentShowCard.show_user.name}</p>
                    <p>users average rating:{this.state.currentShowCard.avg_rating}/5</p>
                    <img src= {this.state.currentShowCard.show_user.img}/>
                </div>
                
            )
        }
    }
  render(){
  return (
   <div>
    {this.showCard()}
   </div>

  );
}
}

export default ShowCard;