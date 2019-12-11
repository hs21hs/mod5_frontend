import React, { Component } from 'react';

class DonateForm extends Component {
    state = {
        selfDelivery: "no"
    }
    
    bindSelfDelivery = (e) => {
        this.setState({selfDelivery: e.target.value})
        
    }

    addOrDonate = () =>{
        if(this.state.selfDelivery === "no"){
            return(
                <div>

                    <form onSubmit = {this.props.handleSubmit} >
                        <label>deliver yourself?</label>
                        <select name = "select" value = {this.state.selfDelivery} onChange ={this.bindSelfDelivery}>
                            <option>no</option>
                            <option>yes</option>
                        </select>
                        
                        <input placeholder = "name" name = "name" type = "text" />
                        <input placeholder = "address" type = "text" />
                        <input placeholder = "postcode" name = "postcode" type = "text" />
                        <br/>
                        
                        <button type = "submit"> submit</button>
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

                        <input placeholder = "name" name = "name" type = "text" />
                        <input placeholder = "foodbank" type = "text" />
                        <input placeholder = "address" type = "text" />
                        <input placeholder = "postcode" name = "postcode" type = "text" />
                        <br/>
                        
                        <button type = "submit"> submit</button>
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