import React, { Component } from 'react';
import DonateForm from '../components/donate_form';
import NewAd from '../components/new_ad';
import serverURL from '../serverURL/serverURL'

class Donate extends Component {
    state = {showNewAd: false}

    createAd = (e) => {
            let ad = {}
        if ((e.target.elements.postcode)){
             ad = 
        {
            ad:{
                food_name: e.target.elements.name.value,
                postcode: e.target.elements.postcode.value,
                user_id: this.props.state.currentUserId,
            }
        }
        }else{  ad = 
            {
                
                ad:{
                    food_name: e.target.elements.name.value,
                    user_id: this.props.state.currentUserId,
                }
            }}
            
             

        fetch(serverURL+"/ads", {method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            Authorisation: localStorage.getItem("token")
        },
        
        body: JSON.stringify(ad)
        })
        .then(resp => resp.json())
        .then(json => this.props.newAd(json))
        .then(() => this.setState({showNewAd: true}))
    }

        
    
    
    createDelivery = (e) => {
        const delivery = 
        {
            delivery:{
                food_bank_id:1,
            }
        }

        fetch(serverURL+"/gdeliveries", {method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            Authorisation: localStorage.getItem("token")
        },
        
        body: JSON.stringify(delivery)
        })
    }
    

    handleSubmit = (e) => {
        e.preventDefault()
        
        
            this.createAd(e)
    
           

        
    }

    //is this way okay? grabbing the last element in array
    showNewAd = () => {
        if (this.state.showNewAd === true){
            return (
                <div>
                    <h1>new ad</h1>
                    <NewAd ad = {this.props.state.myAds[this.props.state.myAds.length-1]}/>
                </div>
            )
        }
    }

  render(){
  return (
    <div class = "cmp">
        <h1 class = "cmp">Create an advert</h1>
        <p class = "cmp">please fill out the details below and we'll find you a rider to help with this donation</p>
        <p class = "cmp">please enter postcode with correct spacing (e.g. n1 6pw)</p>
        <DonateForm handleSubmit = {this.handleSubmit}/>
         {this.showNewAd()}
         
    </div>
   
  );
}
}

export default Donate;