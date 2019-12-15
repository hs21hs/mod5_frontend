import React, { Component } from 'react';
import Delivery from '../components/delivery';
class MyDeliveries extends Component {
    
  

    showDeliveries = () => {
    if(this.props.state.myDeliveries){
        
        return this.props.state.myDeliveries.map((delivery) => {
            return <Delivery delivery = {delivery} key ={delivery.id} delivery_id = {delivery.id} />
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
                        <option value = "any">deliveries with any status</option>
                    </select>

                    <select name = "type">
                        <option value = "rider">deliveries where im the rider</option>
                        <option value = "giver">deliveries where im the giver</option>
                        <option value = "either"> deliveries where im either</option>
                        <option value = "both"> deliveries where im both</option>
                    </select>

                    <button type = "submit">get my deliveries</button>
                </form>
                {this.showDeliveries()}
            </div>
          
        );
      }

}

export default MyDeliveries;