import React, { Component } from 'react';

class Home extends Component {
    

  render(){
  return (
<> 
    <div class = "cmp">
        <h1 class = "cmp">Home Page</h1>
        <h2 class = "cmp">Hi there! Thank you for visiting out website... Let us tell you a little bit about what we do here</h2>
       
    </div>

    <div class = "cmp">
    
    <p2 class = "cmp">we realized that there are a lot of people who have food that they would like to donate. However they arent neccessarily able to transport the food to where it needs to go.</p2>
    <br />
    <p2 class = "cmp">we decided to build a community driven platform where people who have the means to transport food can fill that important role</p2>

    </div>

    <div class = "cmp">
        <h1 class = "cmp">How it works?</h1>
        <h2 class = "cmp">just click create an ad, to let people know you have food that you'd like to donate </h2>
        <h2 class = "cmp">Or, click on all ads and filter through existing ads to help someone transport their food to the food bank </h2>
    </div>
</>
   
  );
}
}

export default Home;