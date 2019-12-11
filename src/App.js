import React, { Component } from 'react';
import './App.css';
import Donate from './containers/donate';
import MyAds from './containers/myAds';
import AllAds from './containers/allAds';
import AllAdsFilter from './components/all_ads_filter';

class App extends Component {
  state = {
    currentUserId: 1,
    currentGiverId: 1,
    currentRiderId: 1,
    myAds: undefined,
    page: "donate"
  }
  
    componentDidMount(){
        fetch("http://localhost:3000/my_ads")
            .then(resp => resp.json())
            .then(json => this.setState({myAds: json}))
    }

    newAd = (json) => {
      
      this.setState({myAds: [...this.state.myAds, json]})
      
    }

    switchPage = (page) => {
      this.setState({page: page})
    }

    deleteAd = (ad_id) => {
      console.log(ad_id)
      fetch("http://localhost:3000/ads/"+ad_id, {method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
       })
       .then(this.setState({myAds: this.state.myAds.filter((ad) => {return ad.id !== ad_id})}))
       
    }

    whichPage = () => {
      if (this.state.page === "donate"){
        return <Donate state = {this.state} newAd = {this.newAd} />
      }
      
      if (this.state.page === "my ads"){
        return <MyAds state = {this.state} handleDelete = {this.deleteAd} />
      }
     
    }

  render(){
  return (
    <div >
      <button onClick = {() => {this.switchPage("my ads")}}>my ads</button>
      <button onClick = {() => {this.switchPage("donate")}}>donate</button>
    <h1>test</h1>
     {this.whichPage()}
     <AllAds/>
    </div>
  );
}
}

export default App;
