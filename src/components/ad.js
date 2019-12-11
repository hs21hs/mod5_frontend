import React, { Component } from 'react';

class Ad extends Component {

  render(){
  return (
   <div>
       <h1>ad</h1>
        <p>food name: {this.props.ad.food_name}</p>
        <button onClick = {() => {this.props.handleDelete(this.props.ad_id)}}>delete</button>
       <h1></h1>
   </div>

  );
}
}

export default Ad;