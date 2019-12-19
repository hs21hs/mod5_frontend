import React, { Component } from 'react';
import NewConversationForm from './NewConversationForm';

class Ad extends Component {

  deleteButton = () => {
    if (this.props.handleDelete){
    return <button onClick = {() => {this.props.handleDelete(this.props.ad_id)}}>delete</button>
    }
  }

  toggleActiveButton = () => {
    if (this.props.toggleActive){
      return <button onClick = {() => {this.props.toggleActive(this.props.ad_id)}}>toggle active</button>
    }
  }

  acceptAdButton = () => {
    if (this.props.handleAcceptAd){
    return (
    <div>
      <button onClick = {() => {this.props.handleAcceptAd(this.props.ad)}}>accept ad and make a delivery!</button>
    <NewConversationForm />
      </div>
    )
    }
  }

  activeOrNot = ()=>{if (this.props.ad.active){return "yes"}else{return "no"}}

  render(){
  return (
   <div>
       <h1>ad</h1>
        <p>food name: {this.props.ad.food_name}</p>
        <p>post code: {this.props.ad.postcode}</p>
        <p>active: {this.activeOrNot()}</p>
        {this.deleteButton()}
        {this.acceptAdButton()}
        {this.toggleActiveButton()}
        
       <h1></h1>
   </div>

  );
}
}

export default Ad;