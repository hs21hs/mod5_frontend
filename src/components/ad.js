import React, { Component } from 'react';
import Thumbnail from './thumbnail';
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
        <button onClick = {() => {this.props.handleAcceptAd(this.props.ad)
        alert("this delivery has been added to `my deliveries page`")}}>accept ad and make a delivery!</button>
        <button onClick = {() => {this.props.showUsersShowPage(this.props.ad.user_id)}}>see this users review page</button>
      </div>
    )
    }
  }

  Thumbnail = () => {
    if (this.props.handleAcceptAd){
    return (
    <div>
      <Thumbnail user_id = {this.props.ad.user_id} />
    </div>
    )
    }
  }

  activeOrNot = ()=>{if (this.props.ad.active){return "yes"}else{return "no"}}

  

  render(){
  return (
   <div >
     <div>
        {this.Thumbnail()}
        </div>
     <div className = "txt">
       <h1>advert</h1>
        <p>food name: {this.props.ad.food_name}</p>
        <p>post code: {this.props.ad.postcode}</p>
        <p>active: {this.activeOrNot()}</p>
        {this.deleteButton()}
        {this.acceptAdButton()}
        {this.toggleActiveButton()}
      </div>
      

        
       <h1></h1>
       <br/>
   </div>

  );
}
}

export default Ad;