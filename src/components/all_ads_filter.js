import React, { Component } from 'react';

class AllAdsFilter extends Component {
    radiusOptions = () => {
        const radiuses = [0.25,0.5,1,1.5,2,3,5,8,10,15,20,30,50,80,100,500]
        return radiuses.map((radius) => {return <option>{radius}</option>})
    }

    

  render(){
  return (
   <div>
        <form onSubmit = {this.props.handleSubmit}>
            <input placeholder = "postcode" name = "postcode"></input>
            <label>radius</label>
            <select name = "select">
                {this.radiusOptions()}
            </select>
            <button type = "submit">submit</button>
        </form>
   </div>

  );
}
}

export default AllAdsFilter;