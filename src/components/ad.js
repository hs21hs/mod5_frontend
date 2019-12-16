import React, { Component } from 'react';

class Ad extends Component {

  deleteButton = () => {
    if (this.props.handleDelete){
    return <button onClick = {() => {this.props.handleDelete(this.props.ad_id)}}>delete</button>
    }
  }
  
  acceptAdButton = () => {
    if (this.props.handleAcceptAd){
    return <button onClick = {() => {this.props.handleAcceptAd(this.props.ad)}}>accept ad and make a delivery!</button>
    }
  }

  render(){
  return (
   <div>
       <h1>ad</h1>
        <p>food name: {this.props.ad.food_name}</p>
        <p>post code: {this.props.ad.postcode}</p>
        {this.deleteButton()}
        {this.acceptAdButton()}
       <h1></h1>
   </div>

  );
}
}

export default Ad;