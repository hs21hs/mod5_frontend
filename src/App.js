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
import ShowPage from './containers/showPage';
import Home from './containers/home';
import serverURL from './serverURL/serverURL'

class App extends Component {
  state = {
    myAds: [],
    allAds: [],
    myDeliveries: [],
    myDeliveriesStatus: undefined,
    myDeliveriesType: undefined,
    page: "login",
    currentShowUsersId: null
  }

  componentDidMount = () => {
    if(localStorage.getItem("token")){
      
      this.setState({page: "home"})
      this.getMyAds()
    }
  }
  
    getMyAds = () => {
      fetch(serverURL+"/my_ads",
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
      fetch(serverURL+"/ads/"+ad_id, {method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            Authorisation: localStorage.getItem("token")
        }
       })
       .then(this.setState({myAds: this.state.myAds.filter((ad) => {return ad.id !== ad_id})}))
       
    }

    deleteUser = () => {
      fetch(serverURL+"/users/delete", {method: "DELETE",
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
      this.setState({page: "home"})
    }

    signUp = ()=> {
      this.setState({page: "home"})
    }

    whichPage = () => {
      if (this.state.page === "donate"){
        return <Donate state = {this.state} newAd = {this.newAd} />
      }
      
      if (this.state.page === "my ads"){
        return <MyAds state = {this.state} handleDelete = {this.deleteAd} toggleActive = {this.toggleActive}/>
      }

      if (this.state.page === "all ads"){
        
        return <AllAds get = {this.getAllAds} state = {this.state} handleAllAdsFilterSubmit = {this.allAdsFilterSubmit} handleAcceptAd = {this.acceptAd} showUsersShowPage = {this.showUsersShowPage}/>
      }

      if (this.state.page === "login"){
        return <Login handleLogin = {this.login}/>
      }

      if (this.state.page === "my deliveries"){
        return <MyDeliveries review = {this.showUsersShowPage} all = {this.getAllMyDeliveries}updateDelivery = {this.updateDelivery} getMyDeliveries= {this.myDeliveries} state = {this.state} createReview = {this.createReview}/>
      }
     
      if (this.state.page === "logout"){
        this.setState({myAds: [], allAds: [], myDeliveries:[], allAds: [], myDeliveriesStatus: undefined, myDeliveriesType: undefined})
        localStorage.removeItem("token")
        this.setState({page: "login"})
      }

      if (this.state.page === "sign up"){
        return <SignUp handleSignUp = {this.signUp}/>
      }

      if (this.state.page === "show page"){
        return <ShowPage state = {this.state}/>
      }
      if (this.state.page === "home"){
        return <Home />
      }

    }
    
    allAdsFilterSubmit = (e) => {
      e.preventDefault()

      const radius = e.target.elements.select.value
      const postcode = e.target.elements.postcode.value
      const filter = {radius: radius, postcode: postcode}

      fetch(serverURL+"/ads/filter",{method: "POST",
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
        <div class = "nav">
          <button onClick = {() => {this.switchPage("login")}} class = "nbtn">login</button>
          <button onClick = {() => {this.switchPage("sign up")}} class = "nbtn">sign up</button>
        </div>
      )
    }else{
    return(
    <div class = "nav">
      <button onClick = {() => {this.switchPage("home")}} class = "nbtn">home</button>
      <button onClick = {() => {this.switchPage("donate")}} class = "nbtn">create an ad</button>
      <button onClick = {() => {this.switchPage("my ads")}} class = "nbtn">my ads</button>
      <button onClick = {() => {this.switchPage("all ads")}} class = "nbtn">all ads</button>
      <button onClick = {() => {this.switchPage("my deliveries")}} class = "nbtn">my deliveries</button>
      <button onClick = {() => {this.switchPage("logout")}} class = "nbtn">logout</button>
      
    </div>
    )
    }
  }
//<button onClick = {() => {this.deleteUser()}} class = "nbtn">delete my account</button>
  acceptAd = (ad) => {

      fetch(serverURL+"/rdeliveries", {method: "POST",
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
    fetch(serverURL+"/my_deliveries", {method: "POST",
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

  getAllMyDeliveries = () => {
    console.log("hey")

    const filter = {type: "either", status: "processing"}
    fetch(serverURL+"/my_deliveries", {method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        Authorisation: localStorage.getItem("token")
    },
    
    body: JSON.stringify(filter)
    })
    .then(resp => resp.json())
    .then(json => this.setState({myDeliveries: json}))
  }

  toggleActive = (aid) => {
    console.log(aid)
    const a = {ad_id: aid}
    fetch(serverURL+"/ads/update_active", {method: "PATCH",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        Authorisation: localStorage.getItem("token")
    },
    
    body: JSON.stringify(a)
    })
    .then((resp)=>resp.json())
    .then((json)=>{
     let index = undefined
      const myNewAds = this.state.myAds.filter((ad,i)=>{if(ad.id !== json.id){return true}
    else{index = i}})
    console.log(index)
    myNewAds.splice(index, 0, json)
      this.setState({myAds:[...myNewAds]})
    })
  }

  createReview = (e,did)=>{
    e.preventDefault()
    
    const review = {review: {delivery_id: did, rating: e.target.elements.rating.value, content: e.target.elements.content.value}}
    console.log(review)

    fetch(serverURL+"/reviews",{method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          Authorisation: localStorage.getItem("token")         
      },
      body: JSON.stringify(review)
    })
    .then((resp)=>resp.json())
    .then((json)=>{console.log(json)
  })}

  showUsersShowPage = (uid) => {
    console.log(uid)
this.setState({currentShowUsersId: uid, page: "show page"})
  }

updateDelivery = (did,e) => {
  e.target.previousElementSibling.innerText = "status: completed"
  const didy= {did: did}
  fetch(serverURL+"/cdeliveries",{method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          Authorisation: localStorage.getItem("token")         
      },
      body: JSON.stringify(didy)
    })
    .then((resp)=>resp.json())
    .then((json)=>{const newDs = this.state.myDeliveries.filter((d) => {return d.delivery.id !== json.id})
  this.setState({myDeliveries: [...newDs, json]})})
  
  }

  getAllAds = () => {
    fetch(serverURL+"/ads/all",{method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        Authorisation: localStorage.getItem("token")         
    }
  }).then((resp)=>resp.json())
  .then((json)=> this.setState({allAds: json}))
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
