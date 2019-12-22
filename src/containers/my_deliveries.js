import React, { Component } from 'react';
import Delivery from '../components/delivery';
import ReviewForm from '../components/review_form';
class MyDeliveries extends Component {
    
  

    showDeliveries = () => {
    if(this.props.state.myDeliveries){
        
        return this.props.state.myDeliveries.map((dobj) => {
            return( 
            <div>
                <Delivery updateDelivery = {this.props.updateDelivery} dobj = {dobj} key ={dobj.delivery.id} delivery_id = {dobj.delivery.id} />
                <ReviewForm createReview = {this.props.createReview} delivery_id = {dobj.delivery.id}/>
            </div>
            )
        })
    }
    }
    render(){
        return (
            <div>
                <h1> deliverys page</h1>
                <form onSubmit = {(e) => {this.props.getMyDeliveries(e)}}>

                    <select name = "status">
                        <option value = "processing">deliveries with status processing</option>
                        <option value = "completed">deliveries with status completed</option>

                    </select>

                    <select name = "type">
                        <option value = "rider">deliveries where im the rider</option>
                        <option value = "giver">deliveries where im the giver</option>
                        <option value = "either"> deliveries where im either</option>
                    </select>

                    <button type = "submit">get my deliveries</button>
                </form>
                {this.showDeliveries()}
            </div>
          
        );
      }

}

export default MyDeliveries;