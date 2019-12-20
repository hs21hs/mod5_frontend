import React, { Component } from 'react';

class ShowCard extends Component {
state= {currentShowCard: null}

    componentDidMount(){
        if (this.props.state.currentShowUsersId){
        const showUsersId = {showUsersId: this.props.state.currentShowUsersId}

        fetch("http://localhost:3000/reviews/show_card",{method: "POST",
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
                <div>
                    <h1>show card</h1>
                    <p>users name:{this.state.currentShowCard.show_user.name}</p>
                    <p>users average rating:{this.state.currentShowCard.avg_rating}</p>
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