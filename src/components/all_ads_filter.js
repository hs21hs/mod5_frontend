import React, { Component } from 'react';

class AllAdsFilter extends Component {
    radiusOptions = () => {
        const radiuses = [0.25,0.5,1,1.5,2,3,5,8,10,15,20,30,50,80,100,500]
        return radiuses.map((radius) => {return <option>{radius}</option>})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log (e.target.elements.select.value)
        console.log (e.target.elements.postcode.value)
    }

  render(){
  return (
   <div>
        <form onSubmit = {this.handleSubmit}>
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