import React, { Component } from 'react';
import Ad from '../components/ad';
import AllAdsFilter from '../components/all_ads_filter';

class MyAds extends Component {

    showAds = () => {
    
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