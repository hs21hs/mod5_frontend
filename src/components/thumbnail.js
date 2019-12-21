import React, { Component } from 'react';

class Thumbnail extends Component {
    state= {currentShowCard: null}

    componentDidMount(){
        const showUsersId = {showUsersId: this.props.user_id}
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
    showTn = ()=> {
        if (this.state.currentShowCard){
    return(
    <div>
       <h1>tn</h1>
       <img src= {this.state.currentShowCard.show_user.img} class = "tn_img"/>
       <p>users name:{this.state.currentShowCard.show_user.name}</p>
        <p>users average rating:{this.state.currentShowCard.avg_rating}</p>
    </div>
    )
   }
    }
  
  render(){
  return (
   <div>{this.showTn()}</div>

  );
}
}

export default Thumbnail;