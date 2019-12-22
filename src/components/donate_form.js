import React, { Component } from 'react';

class DonateForm extends Component {
    state = {
        selfDelivery: "no",
        selfPostcode: "false"
    }
    
    bindSelfDelivery = (e) => {
        this.setState({selfDelivery: e.target.value})
        
    }
    bindSelfPostcode = (e) => {
        this.setState({selfPostcode: e.target.value})
        
    }
    filterFormOrNot = () => {
        if(this.state.selfPostcode === "false"){
            return <input placeholder = "postcode" name = "postcode"/>
        }
    }

    // <select name = "select1" value = {this.state.selfPostcode} onChange ={this.bindSelfPostcode}>
    //                         <option value = "true">use my home postcode as the pick up location for this ad</option>
    //                         <option value = "false">set custom postcode as the pick up location for this ad</option>
    //                     </select>

    addOrDonate = () =>{
        if(this.state.selfDelivery === "no"){
            return(
                <div>

                    <form onSubmit = {this.props.handleSubmit} class = "cmp" >
                        
                        
                        

                        {this.filterFormOrNot()}

                        <input placeholder = "food name" name = "name" type = "text" />
                        
                        <br/>
                        
                        <button type = "submit"> submit advert</button>
                    </form>
                    
                </div>
            )
        }
        if(this.state.selfDelivery === "yes"){
            return(
                <div>

                    <form onSubmit = {this.props.handleSubmit} >

                        <label>deliver yourself?</label>
                        <select name = "select" value = {this.state.selfDelivery} onChange ={this.bindSelfDelivery}>
                            <option>no</option>
                            <option>yes</option>
                        </select>

                        <input placeholder = "food name" name = "name" type = "text" />
                        <input placeholder = "foodbank" type = "text" />
                        <br/>
                        
                        <button type = "submit"> create delivery</button>
                    </form>
                    
                </div>
            )
        }

    }

  render(){
  return (
   this.addOrDonate()

  );
}
}

export default DonateForm;