import React, { Component } from 'react';
import DonateForm from '../components/donate_form';
import NewAd from '../components/new_ad';
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
            
             

        fetch("http://localhost:3000/ads", {method: "POST",
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
                rider_id:this.props.state.currentRiderId,
                giver_id:this.props.state.currentGiverId,
                food_bank_id:1,
            }
        }

        fetch("http://localhost:3000/deliveries", {method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        
        body: JSON.stringify(delivery)
        })
    }
    

    handleSubmit = (e) => {
        e.preventDefault()
        
        if(e.target.elements.select.value==="no"){
            this.createAd(e)
        }
           

        if(e.target.elements.select.value==="yes"){
            this.createDelivery(e)
        }
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
    <div>
        <h1>make a donation page</h1>
         <DonateForm handleSubmit = {this.handleSubmit}/>
         {this.showNewAd()}
         
    </div>
   
  );
}
}

export default Donate;