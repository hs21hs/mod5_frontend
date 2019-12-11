import React, { Component } from 'react';

class NewAd extends Component {

  render(){
  return (
   <div>
       <h1>Congratulations, you've just made a new ad</h1>
        <p>food name: {this.props.ad.food_name}</p>
       <h1></h1>
   </div>

  );
}
}

export default NewAd;