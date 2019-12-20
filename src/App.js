import React, { Component } from 'react';
import './App.css';
import Donate from './containers/donate';
import MyAds from './containers/myAds';
import AllAds from './containers/allAds';
import AllAdsFilter from './components/all_ads_filter';
import Login from './containers/login';
import SignUp from './containers/signUp';
import myDeliveries from './containers/my_deliveries';
import MyDeliveries from './containers/my_deliveries';

class App extends Component {
  state = {
    myAds: [],
    allAds: [],
    myDeliveries: [],
    myDeliveriesStatus: undefined,
    myDeliveriesType: undefined,
    page: "login"
  }

  componentDidMount = () => {
    if(localStorage.getItem("token")){
      
      this.setState({page: "donate"})
      this.getMyAds()
    }
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
      fetch("http://localhost:3000/ads/"+ad_id, {method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            Authorisation: localStorage.getItem("token")
        }
       })
       .then(this.setState({myAds: this.state.myAds.filter((ad) => {return ad.id !== ad_id})}))
       
    }

    deleteUser = () => {
      fetch("http://localhost:3000/users/delete", {method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            Authorisation: localStorage.getItem("token")
        }
       })
       .then((v) => {localStorage.removeItem("token")
         this.setState({page: "login"})})
       
    }

    login = ()=> {
      this.setState({page: "donate"})
    }

    signUp = ()=> {
      this.setState({page: "donate"})
    }

    whichPage = () => {
      if (this.state.page === "donate"){
        return <Donate state = {this.state} newAd = {this.newAd} />
      }
      
      if (this.state.page === "my ads"){
        return <MyAds state = {this.state} handleDelete = {this.deleteAd} toggleActive = {this.toggleActive}/>
      }

      if (this.state.page === "all ads"){
        return <AllAds state = {this.state} handleAllAdsFilterSubmit = {this.allAdsFilterSubmit} handleAcceptAd = {this.acceptAd}/>
      }

      if (this.state.page === "login"){
        return <Login handleLogin = {this.login}/>
      }

      if (this.state.page === "my deliveries"){
        return <MyDeliveries getMyDeliveries= {this.myDeliveries} state = {this.state}/>
      }
     
      if (this.state.page === "logout"){
        this.setState({myAds: [], allAds: []})
        localStorage.removeItem("token")
        this.setState({page: "login"})
      }

      if (this.state.page === "sign up"){
        return <SignUp handleSignUp = {this.signUp}/>
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

  navBar = () => {
    if(this.state.page === "login" || this.state.page === "sign up"){
      return(
        <div>
          <button onClick = {() => {this.switchPage("login")}}>login</button>
          <button onClick = {() => {this.switchPage("sign up")}}>sign up</button>
        </div>
      )
    }else{
    return(
    <div class = "nav">
      <button onClick = {() => {this.switchPage("my ads")}} class = "nbtn">my ads</button>
      <button onClick = {() => {this.switchPage("donate")}} class = "nbtn">donate</button>
      <button onClick = {() => {this.switchPage("all ads")}} class = "nbtn">all ads</button>
      <button onClick = {() => {this.switchPage("my deliveries")}} class = "nbtn">my deliveries</button>
      <button onClick = {() => {this.switchPage("logout")}} class = "nbtn">logout</button>
      <button onClick = {() => {this.deleteUser()}} class = "nbtn">delete my account</button>
    </div>
    )
    }
  }

  acceptAd = (ad) => {

      fetch("http://localhost:3000/rdeliveries", {method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          Authorisation: localStorage.getItem("token")
      },
      
      body: JSON.stringify({ad: ad})
      })
  

  }

  myDeliveries = (e) => {
    e.preventDefault()
const type = e.target.elements.type.value
const status = e.target.elements.status.value
const filter = {type: type, status: status}
    fetch("http://localhost:3000/my_deliveries", {method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        Authorisation: localStorage.getItem("token")
    },
    
    body: JSON.stringify(filter)
    })
    .then(resp => resp.json())
    .then(json => this.setState({myDeliveries: json}))
    .then((x) => {this.setState({myDeliveriesStatus: status, myDeliveriesType: type})})
    
     
  }

  toggleActive = (aid) => {
    console.log(aid)
    const a = {ad_id: aid}
    fetch("http://localhost:3000/ads/update_active", {method: "PATCH",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        Authorisation: localStorage.getItem("token")
    },
    
    body: JSON.stringify(a)
    })
    .then((resp)=>resp.json())
    .then((json)=>{
      const myNewAds = this.state.myAds.filter((ad)=>{if(ad.id !== json.id){return true}})
      this.setState({myAds:[...myNewAds, json]})
    })
  }

  render(){
  return (
    <div class = "bg">
      {this.navBar()}
    <h1 class ="test">test</h1>
     {this.whichPage()}
    </div>
  );
}
}

export default App;
