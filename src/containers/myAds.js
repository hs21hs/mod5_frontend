import React, { Component } from 'react';
import Ad from '../components/ad';

class MyAds extends Component {
    
  

    showAds = () => {
    if(this.props.state.myAds){
        
        return this.props.state.myAds.map((ad) => {
            return <Ad ad = {ad} key ={ad.id} ad_id = {ad.id} handleDelete = {this.props.handleDelete} toggleActive = {this.props.toggleActive}/>
        })
    }
    }
    render(){
        return (
            <div class = "cmp">
                <h1 class = "cmp"> My ads page</h1>
                <br/>
                
                
                {this.showAds()}
            </div>
          
        );
      }

}

export default MyAds;