import React, { Component } from 'react';
import Ad from '../components/ad';
import AllAdsFilter from '../components/all_ads_filter';

class MyAds extends Component {

    showAds = () => {
    
    }
    render(){
        return (
            <div>
                <h1> ads page</h1>
                <AllAdsFilter />
                {this.showAds()}
            </div>
          
        );
      }

}

export default MyAds;