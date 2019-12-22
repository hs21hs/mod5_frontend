import React, { Component } from 'react';

class Delivery extends Component {



  render(){
  return (
   <div>
       <h1>delivery</h1>
            <p>pickup postcode: {this.props.dobj.delivery.pick_up_postcode}</p>
            <p>giver email: {this.props.dobj.extra.giver_email}</p>
            <p>giver name: {this.props.dobj.extra.giver_name}</p>
            <p>rider email: {this.props.dobj.extra.rider_email}</p>
            <p>rider name: {this.props.dobj.extra.rider_name}</p>
            <p>food bank: {this.props.dobj.extra.food_bank_name}</p>
            <p>status: {this.props.dobj.delivery.status}</p>
            <button onClick = {(e) => this.props.updateDelivery(this.props.delivery_id,e)}>mark delivery as completed</button>
       <h1></h1>
   </div>

  );
}
}

export default Delivery;