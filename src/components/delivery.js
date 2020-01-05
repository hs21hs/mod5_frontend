import React, { Component } from 'react';

class Delivery extends Component {

showDelivery = () => {
  
    if (this.props.dobj.wUser === "giver"){
      return(
    <div>
       <h1>delivery</h1>
       <p>"you are the giver for this delivery"</p>
       <p>rider email: {this.props.dobj.extra.rider_email}</p>
            <p>rider name: {this.props.dobj.extra.rider_name}</p>
            <button onClick = {()=>{this.props.review(this.props.dobj.rider_id)}} >see their review page</button>
            <p>food bank: {this.props.dobj.extra.food_bank_name}</p>
            <p>status: {this.props.dobj.delivery.status}</p>
            <button onClick = {(e) => this.props.updateDelivery(this.props.delivery_id,e)}>mark delivery as completed</button>
   </div>
      )
    }else{
      return(
        <div>
        <h1>delivery</h1>
        <p>"you are the rider for this delivery"</p>
        <p>pickup postcode: {this.props.dobj.delivery.pick_up_postcode}</p>
            <p>giver email: {this.props.dobj.extra.giver_email}</p>
            <p>giver name: {this.props.dobj.extra.giver_name}</p>
            <button onClick = {()=>{this.props.review(this.props.dobj.giver_id)}}>see their review page</button>
            <p>food bank: {this.props.dobj.extra.food_bank_name}</p>
            <p>status: {this.props.dobj.delivery.status}</p>
            <button onClick = {(e) => this.props.updateDelivery(this.props.delivery_id,e)}>mark delivery as completed</button>
   </div>

        
      )
    }
}

  render(){
  return (
    this.showDelivery()

  );
}
}

export default Delivery;