import React, { Component } from 'react';
import Ad from '../components/ad';
import AllAdsFilter from '../components/all_ads_filter';

class MyAds extends Component {

    componentDidMount(){
        this.props.get()
        console.log("f")

    }
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
            <div className = "all_ads"> 
                <h1 className = "all_ads"> all ads page</h1>
                <p>please enter a postcode in the following format (n1 6pw) to filter your search</p>
                <AllAdsFilter handleSubmit={this.props.handleAllAdsFilterSubmit}/>
                <div className = "all_ads_coloumn">
                    {this.showAds()}
                </div>
            </div>
          
        );
      }

}

export default MyAds;