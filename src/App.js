import React, { Component } from 'react';
import './App.css';
import Donate from './containers/donate';
import MyAds from './containers/myAds';
import AllAds from './containers/allAds';
import AllAdsFilter from './components/all_ads_filter';
import Login from './containers/login';

class App extends Component {
  state = {
    currentUserId: 1,
    currentGiverId: 1,
    currentRiderId: 1,
    myAds: undefined,
    allAds: undefined,
    page: "donate"
  }
  
    getMyAds = () => {
      fetch("http://localhost:3000/my_ads",
      {headers: {
        Authorisation: localStorage.getItem("token")
      }})
            .then(resp => resp.json())
            .then(json => this.setState({myAds: json}))
    }

    newAd = (json) => {
      
      this.setState({myAds: [...this.state.myAds, json]})
      
    }

    switchPage = (page) => {
      this.setState({page: page})

      if (page === "my ads"){
        this.getMyAds()
      }
    }

    deleteAd = (ad_id) => {
      console.log(ad_id)
      fetch("http://localhost:3000/ads/"+ad_id, {method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            Authorisation: localStorage.getItem("token")
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

      if (this.state.page === "all ads"){
        return <AllAds state = {this.state} handleDelete = {this.deleteAd} handleAllAdsFilterSubmit = {this.allAdsFilterSubmit}/>
      }

      if (this.state.page === "login"){
        return <Login />
      }
     
      if (this.state.page === "logout"){
        localStorage.removeItem("token")
        return <Login />
      }

    }
    
    allAdsFilterSubmit = (e) => {
      e.preventDefault()

      const radius = e.target.elements.select.value
      const postcode = e.target.elements.postcode.value
      const filter = {radius: radius, postcode: postcode}

      fetch("http://localhost:3000/ads/filter",{method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          Authorisation: localStorage.getItem("token")
      },
      
      body: JSON.stringify(filter)
      })
        .then((resp) => resp.json())
        .then((json) => this.setState({allAds: json}))
  }

  render(){
  return (
    <div >
      <button onClick = {() => {this.switchPage("my ads")}}>my ads</button>
      <button onClick = {() => {this.switchPage("donate")}}>donate</button>
      <button onClick = {() => {this.switchPage("all ads")}}>all ads</button>
      <button onClick = {() => {this.switchPage("login")}}>login</button>
      <button onClick = {() => {this.switchPage("logout")}}>logout</button>
    <h1>test</h1>
     {this.whichPage()}
    </div>
  );
}
}

export default App;
