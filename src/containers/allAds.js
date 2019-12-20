import React, { Component } from 'react';
import Ad from '../components/ad';
import AllAdsFilter from '../components/all_ads_filter';

class MyAds extends Component {

    showAds = () => {
        
        if(this.props.state.allAds){
            if (this.props.state.allAds.error){
                return <h1>error finding ads</h1>
            }else{
                return this.props.state.allAds.map((ad) => {
                    return <Ad ad = {ad} key ={ad.id} ad_id = {ad.id} handleAcceptAd = {this.props.handleAcceptAd} showUsersShowPage = {this.props.showUsersShowPage}/>
                })
            }
        }
    }
    render(){
        return (
            <div>
                <h1> all ads page</h1>
                <AllAdsFilter handleSubmit={this.props.handleAllAdsFilterSubmit}/>
                {this.showAds()}
            </div>
          
        );
      }

}

export default MyAds;